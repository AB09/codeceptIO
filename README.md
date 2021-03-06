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
3. Now from command line run `npm run gen-allure`. This will create a report in the temporary folder and start a server and open html running on a port. 


**Report - stepByStepReport**
To create step by step report for a test, perform below steps. 
1. In `codecept.conf.js` enabled plugin `stepByStepReport` by setting `enabled:true`. 
2. Run your test using `npm test` which will create screenshot for each step. Later, screenshots are 
combined into slideshow. By default, reports are only generated for failed test. 
3. To generate slideshow for passed test, in `codecept.conf.js` change to `deleteSuccessful:false`.

**Parallel Execution**
1. To run several test file in parallel, enabled multiple run in codecept.conf.js
2. Number of `chunks` will tell the test runner to run certain number suits in parallel. 
3. Run your test in parallel by running `npm run "tests-parallel` and it will trigger parallel execution with `chunks` value set to `2`.


**ISSUES**
1. Step by step report are not being generated if user provides custom output directory
2. Using Node assertion library inside try-catch block does show failure message when assertion
fails. However, it marks the scenario as passed. 
3. Need to understand the implementation of decrease quantity button on PIP page. 

