const url = "conair-1875w-mid-size-hair-dryer/6000198160418";

Feature('Testing item page'); 
Scenario('test something', (I, pipPage) => {
pipPage.open(url);
pipPage.hasLoaded();
pipPage.verifyCommonElements();
});
