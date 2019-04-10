const I = actor();

module.exports = {

  variantBtn:"[role='listbox'] button",
  notAvailableVariantBtn: "[role='listbox'] button[aria-label$='not available']",
  availableVariantBtn: "//div[contains(@class,'css-1rh880d')]//button[not(contains(@aria-label,'not available'))]",

  async addUnavailableVariant() {
  	await I.click(locate(this.notAvailableVariantBtn).first());
  },

  async addAvailableVariant() {
  	await I.click(locate(this.availableVariantBtn).first());
  },
}
