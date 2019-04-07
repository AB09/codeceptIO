const I = actor();

module.exports = {

  pickUpTab: "#pickup-section",
  shippingTab: "#shipping-section",

  async checkFreeBtn() {
    I.click(this.pickUpTab);
    console.log(`${await I.grabTextFrom(locate("#pickup-section [class*='css-p42mmv']").first())}`);
  }

}
