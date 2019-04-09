const I = actor();
const chai = require('chai');  
const assert = chai.assert; 
const recorder = require('codeceptjs').recorder;
const data = require('../testdata/data');

module.exports = {

  pickUpTab: "#pickup-section",
  shippingTab: "#shipping-section",
  locateStore1: "#pickup-section [class*='css-p42mmv']",
  postalCodeInputPickup: "#pickup-section input",
  postalCodeUpdateBtnPickup: "#pickup-section button[type='submit']",
  pickupStoreElements: "#pickup-section div[class*='css-1yp4ln']",
  pickupStoreInfoList: "#pickup-section div[class*='css-1yp4ln'] b",
  pcInputShippingTab: "#shipping-section input",
  pcUpdateBtnShippingTab: "#shipping-section button[type='submit']",
  shippingTypeText: "#shipping-section [class*='css-1y3tu5o']",
  shippingFeeText: "#shipping-section [class*='css-1movlma']",

  	async exandPickupTab() {
  		await I.click(this.pickUpTab);
  	},

  async enterPostalCode(pc="M9V3G4") {
  	this.exandPickupTab();
  	I.waitForVisible(this.postalCodeInputPickup);
  	I.fillField(this.postalCodeInputPickup, pc);
  	I.waitForEnabled(this.postalCodeUpdateBtnPickup);
  	await I.click(this.postalCodeUpdateBtnPickup);
  },

  async verifyNearestStores() {
  	I.waitForVisible(this.pickupStoreElements,5);
  	await I.retry({ retries: 2, minTimeout: 10000 }).seeNumberOfVisibleElements(this.pickupStoreElements, 3);
  },

  	async getFirstNearestLocation() {
  	let arr;
  	 	arr=await I.grabTextFrom(this.pickupStoreInfoList);
  	try {
  		assert.equal(arr[0],data.pickupStoresInfo.rexdale.name,"'FAIL: Nearest store is not Walmart Rexdale Supercentre'");	
  	} catch(e) {
  		recorder.throw(e);
  	}
  },

  	exandShippingTab() {
		I.click(this.shippingTab);
	},

	async enterShippingPC(pc="M9V3G4") {
		this.exandShippingTab();
		I.waitForVisible(this.pcInputShippingTab);
		I.fillField(this.pcInputShippingTab,pc);
		I.waitForEnabled(this.pcUpdateBtnShippingTab);
		await I.click(this.pcUpdateBtnShippingTab);
	},
	async verifyShippingFees(cost=data.shippingType.standard.cost) {
		let shippingType, shippingFee;
		I.retry({ retries: 2, minTimeout: 10000 }).waitForVisible(this.shippingTypeText);
		I.see(data.shippingType.standard.label,{css:this.shippingTypeText});
		I.see(cost,{css:this.shippingFeeText});
   }
}
