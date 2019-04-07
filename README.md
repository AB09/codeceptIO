# codeceptIO
CodeceptJS repo for E2E testing 

#Requirements
NodeJS v 8.9 and higher required to start.

#Setup framework
1. Clone the repository 
2. Run `npm install` to install all the dependencies listed in package.json

#Execution 
1. run `npm test` to execute test on local machine. It will execute on default URL mentioned in assignment. 

#Report - Allure 
To create allure report perform below steps. 
1. Please install allure-commandline package as `npm install -g allure-commandline --save-dev`
2. Run your test using `npm test` which will create expected xml file in default `\output` folder
3. Now from command line run `allure serve output`. This will create a report in the temporary folder and start a server on a port :63768
