
Feature('Testing item page'); 
	Scenario('test something', (I, pipPage) => {
		pipPage.open();
		pipPage.hasLoaded();
		pipPage.verifyCommonElements();
	});

	Scenario.only('get product item title', (I, pipPage) => {
		 pipPage.open();
		 pipPage.addItemToCart();
		 pipPage.verifyCartQuantity(1);
	});
