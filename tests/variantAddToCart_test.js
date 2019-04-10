const data = require('../testdata/data').variantItem;


Feature('Verification of add to cart for avaiable/unavailable variant');

Before((pipPage) => {
  		pipPage.open(data.sku);
	});

Scenario.only('Try to add available variant item', (pipPage) => {
		pipPage.addAvailableVariantItem();
		pipPage.verifyCartQuantity(1);
}).tag('variant').tag('pip');

Scenario('Try to add unavailable variant item', (pipPage) => {
		pipPage.addUnavailableVariantItem();
}).tag('variant').tag('pip');
