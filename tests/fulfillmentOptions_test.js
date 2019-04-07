
Feature('Pickup and Shipping options');

Before((pipPage) => {
  		pipPage.open();
	});

Scenario('Test Pickup tab', (pipPage) => {
	pipPage.hasLoaded();
	pipPage.fulfillmentModal.checkFreeBtn();
});
