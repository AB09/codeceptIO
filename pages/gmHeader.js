const I = actor();
const chai = require('chai');  
const assert = chai.assert; 
const recorder = require('codeceptjs').recorder;

module.exports = {

  // insert your locators and methods here
  gmHeader:"[class*='gm-header']",
  navCartCount: "#nav-cart-mobile .nav-cart-count",
  
  async verifyQuantity(expectedQty) {
  	let qtyCount = await I.grabTextFrom(this.navCartCount);
  	try {
  	assert.equal(qtyCount,expectedQty,`FAIL: Quantity Mismatched, cart count is not matching the expected value`);
  } catch (e) {
    recorder.throw(e);
  }
  },
}
