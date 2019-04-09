# codeceptIO
CodeceptJS repo for E2E testing 

**Requirements** - NodeJS v 8.9 and higher required to start.

**Setup framework**
1. Clone the repository 
2. Run `npm install` to install all the dependencies listed in package.json

**Execution**
1. run `npm test` to execute test on local machine. It will execute on default URL mentioned in assignment. 
2. To execute test by `@tag` name run `npm run test-with-tags` followed by `@tagname`.
3. To execute all test related to `item page`, run `npm run all-pip-test`

**Report - Allure** 
To create allure report perform below steps. 
1. Please install allure-commandline package as `npm install -g allure-commandline --save-dev`
2. Run your test using `npm test` which will create expected xml file in default `\output` folder
3. Now from command line run `allure serve output/reports/allure`. This will create a report in the temporary folder and start a server and open html running on a port. 

**Report - stepByStepReport**
To create step by step report for a test, perform below steps. 
1. In `codecept.conf.js` enabled plugin `stepByStepReport` by setting `enabled:true`. 
2. Run your test using `npm test` which will create screenshot for each step. Later, screenshots are 
combined into slideshow. By default, reports are only generated for failed test. 
3. To generate slideshow for passed test, in `codecept.conf.js` change to `deleteSuccessful:true`.