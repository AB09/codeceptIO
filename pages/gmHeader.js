const I = actor();
const chai = require('chai');  
const assert = chai.assert; 
const recorder = require('codeceptjs').recorder;

module.exports = {

  // insert your locators and methods here
  gmHeader:"[class*='gm-header']",
  navCartCount: "#nav-cart-mobile .nav-cart-count",
  
  verifyQuantity(expectedQty) {
  I.see(expectedQty,{css:this.navCartCount});
  },
}
