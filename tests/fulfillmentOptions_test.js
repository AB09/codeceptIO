const data = require('../testdata/data');
Feature('Pickup and Shipping options');

let skuIdArr = new DataTable(['skuID', 'prTitle']);
skuIdArr.add([data.item1.sku,data.item1.title]);
skuIdArr.add([data.item2.sku,data.item2.title]);
skuIdArr.add([data.item3.sku,data.item3.title]);

Data(skuIdArr).Scenario('Test Pickup tab', (pipPage,current) => {
	pipPage.open(current.skuID)
	pipPage.hasLoaded();
	pipPage.verifyCommonElements(current.prTitle);
	pipPage.fulfillmentModal.enterPostalCode();
	pipPage.fulfillmentModal.verifyNearestStores();
	pipPage.fulfillmentModal.getFirstNearestLocation();
});
