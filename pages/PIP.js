const I = actor();

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
  cta:{
  	addToRegs:"[data-automation='heart-icon']",
  	addToCart:"[data-automation='cta-button']",
  	findInStore:"[data-automation='find-in-store']"	
  },
  


  open(skuId='conair-1875w-mid-size-hair-dryer/6000198160418') {
  	I.amOnPage(skuId);
  },

  hasLoaded() {
  	I.waitForVisible(this.productPrice);
  },

  verifyCommonElements() {
  	I.waitForVisible(this.productTitle);
  	I.waitForVisible(this.productDesc);
  }
}
