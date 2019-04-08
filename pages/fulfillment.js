const I = actor();
const chai = require('chai');  
const assert = chai.assert; 
const recorder = require('codeceptjs').recorder;

module.exports = {

  pickUpTab: "#pickup-section",
  shippingTab: "#shipping-section",
  locateStore1: "#pickup-section [class*='css-p42mmv']",
  postalCodeInputPickup: "#pickup-section input",
  postalCodeUpdateBtnPickup: "#pickup-section button",
  pickupStoreElements: "#pickup-section div[class*='css-1yp4ln']",
   
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
  	I.waitForElement(this.pickupStoreElements,10);
  	await I.seeNumberOfVisibleElements(this.pickupStoreElements, 3);
  },

  async getFirstNearestLocation() {
  	let arr;
  	 	arr=await I.grabTextFrom({xpath:"(//section[@id='pickup-section']//div[contains(@class,'css-1yp4ln')]//following::b)[1]"});
  	try {
  		assert.equal(arr,'Walmart Rexdale Supercentre',"'FAIL: Nearest store is not Walmart Rexdale Supercentre'");	
  	} catch(e) {
  		recorder.throw(e);
  	}
  	
  }

}
