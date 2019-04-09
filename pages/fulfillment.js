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
  postalCodeUpdateBtnPickup: "#pickup-section button",
  pickupStoreElements: "#pickup-section div[class*='css-1yp4ln']",
  pickupStoreInfoList: "#pickup-section div[class*='css-1yp4ln'] b",
   
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
  	
  }

}
