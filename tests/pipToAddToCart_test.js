
Feature('Testing item page'); 
	
	Before((pipPage) => {
  		pipPage.open();
	});

	Scenario('Verify static elements of item page', (pipPage) => {
		pipPage.hasLoaded();
		pipPage.verifyCommonElements();
	});

	Scenario('Add item to cart and verify quantity in cart', (pipPage) => {
		 pipPage.addItemToCart();
		 pipPage.verifyCartQuantity(1);
	});

	Scenario('Increase quantity on item page and add item to cart', (pipPage) => {
		 pipPage.increaseQtyBy(2);
		 pipPage.addItemToCart();
		 pipPage.verifyCartQuantity(3);
	});


