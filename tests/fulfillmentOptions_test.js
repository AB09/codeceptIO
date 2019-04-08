
Feature('Pickup and Shipping options');

Before((pipPage) => {
  		pipPage.open();
	});

Scenario.only('Test Pickup tab', (pipPage) => {
	pipPage.hasLoaded();
	pipPage.fulfillmentModal.enterPostalCode();
	pipPage.fulfillmentModal.verifyNearestStores();
	pipPage.fulfillmentModal.getFirstNearestLocation();
});
