const I = actor();

module.exports = {

  // insert your locators and methods here
  gmHeader:"[class*='gm-header']",
  navCartCount: "#nav-cart-mobile .nav-cart-count",

  async getCartCount() {
  		I.waitForElement(this.gmHeader);
  		await I.waitForElement(this.navCartCount,30);
  		console.log(`${await I.grabTextFrom(this.navCartCount)}`);
  }
}
