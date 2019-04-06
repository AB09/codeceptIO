const I = actor();

module.exports = {

  // insert your locators and methods here
  //page elements
  productTitle:"[data-automation='product-title']",
  productDesc: "[data-automation='short-description']",
  productPrice:"[data-automation='buybox-price']",

  open(skuId='6000198160418') {
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
