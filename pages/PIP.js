const I = actor();
const header = require('./gmHeader');
module.exports = {

  // insert your locators and methods here
  //page elements
  productTitle:"[data-automation='product-title']",
  productDesc: "[data-automation='short-description']",
  productPrice:"[data-automation='buybox-price']",
  prodcutRatings: "[class*='css-0'] [data-automation='rating-stars']",
  qtyDecreaseBtn:"[data-automation='decrease-qty']",
  qtyIncreaseBtn:"[data-automation='increase-qty']",
  qtyInputBox:"[data-automation='quantity'] input",



  //cta buttons
  
  	addToRegs:"[data-automation='heart-icon']",
  	addToCart:"[data-automation='cta-button']",
  	findInStore:"[data-automation='find-in-store']"	,

  

  itemAddedModal: "#modal-root",
  continueShoppingBtn: "[data-automation='continue-shopping']",


  open(skuId='conair-1875w-mid-size-hair-dryer/6000198160418') {
  	I.amOnPage(skuId);
  },

  hasLoaded() {
  	I.waitForVisible(this.productPrice);
  },

  verifyCommonElements() {
  	I.waitForVisible(this.productTitle);
  	I.waitForVisible(this.productDesc);
  },

  async getProductTitle() {
  	console.log(`${await I.grabTextFrom(this.productTitle)}`);
  },

  getCartCountFromHeader() {
  	header.getCartCount();
  },

   async addItemToCart() {
  	this.hasLoaded();
  	I.waitForEnabled(this.addToCart);
  	I.click(this.addToCart);
  	await I.waitForElement(this.itemAddedModal);
  	//I.seeElement(this.continueShoppingBtn);
  	I.waitForEnabled(this.continueShoppingBtn);
  	I.click(this.continueShoppingBtn);
  }

}
