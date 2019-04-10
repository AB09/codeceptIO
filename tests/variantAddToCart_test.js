const data = require('../testdata/data').variantItem;


Feature('Verification of add to cart for avaiable/unavailable variant');

Before((pipPage) => {
  		pipPage.open('6000074498690');
	});

Scenario('Try to add available variant item', (pipPage) => {
		pipPage.addAvailableVariantItem();
		pipPage.verifyCartQuantity(1);
});

Scenario('Try to add unavailable variant item', (pipPage) => {
		pipPage.addUnavailableVariantItem();
});
