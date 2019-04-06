
Feature('Testing item page'); 
	Scenario('test something', (I, pipPage) => {
		pipPage.open();
		pipPage.hasLoaded();
		pipPage.verifyCommonElements();
	});
