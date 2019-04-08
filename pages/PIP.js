const I = actor();
const header = require('./gmHeader');
const Objfullfilment = require('./fulfillment');
const data = require('../testdata/data');
const chai = require('chai');  
const assert = chai.assert; 
const recorder = require('codeceptjs').recorder;

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
	cta: {
		addToRegs:"[data-automation='heart-icon']",
  		addToCart:"[data-automation='cta-button']",
  		findInStore:"[data-automation='find-in-store']"
	}, 

  itemAddedModal: "#modal-root",
  continueShoppingBtn: "[data-automation='continue-shopping']",
  fulfillmentModal: Objfullfilment,

  open(skuId='conair-1875w-mid-size-hair-dryer/6000198160418') {
  	I.amOnPage(skuId);
  },

  hasLoaded() {
  	I.waitForVisible(this.productPrice);
  },

  verifyCommonElements() {
  	I.waitForVisible(this.productTitle);
  	I.waitForVisible(this.productDesc);
    I.see(data.product.title,{css:this.productTitle});
  },

   verifyCartQuantity(expectedQty) {
  	header.verifyQuantity(expectedQty);	
  },

   addItemToCart() {
  	this.hasLoaded();
  	I.waitForEnabled(this.cta.addToCart);
  	I.click(this.cta.addToCart);
  	I.waitForElement(this.itemAddedModal);
   	I.waitForEnabled(this.continueShoppingBtn,5);
  	I.click(this.continueShoppingBtn);
  },


  increaseQtyBy(inputQty) {
  	for (let i=1; i<=inputQty; i++) {
  		 I.click(this.qtyIncreaseBtn);
  	}
  },

}
