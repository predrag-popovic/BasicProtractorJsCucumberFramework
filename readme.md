# Automation Framework

This framework example using JS programming language with integrated Cucumber framework and Protractor.
Automatic test used Selenium WebDriver (Chrome, Firefox, Edge, Safari) for executing tests and also this
framework have support for Selenium Grid.

# New Features

  - Choose your Browser where you want to run your tests on local machine or using HUB and NODES
  - Writing a test case using Gherkin syntax
  - Generate two Report after test is finish 

You can also:

  - Get Screenshot if test is failed

# Tech

Automation Basic Framework in order to work properly uses a number of dependencie:

* [NodeJS](https://nodejs.org/en/) - As an asynchronous event driven JavaScript runtime, Node is designed to build scalable network applications.
* [Protractor](https://www.protractortest.org/) - Protractor is an end-to-end test framework for Angular and AngularJS applications. Protractor runs tests against your application running in a real browser, interacting with it as a user would.
* [Cucumber](https://docs.cucumber.io/) - Behaviour-Driven Development (BDD).
* [Selenium](https://www.seleniumhq.org/download/) - Selenium has the support of some of the largest browser
* [Selenium Grid](https://www.seleniumhq.org/docs/07_selenium_grid.jsp) - Selenium-Grid allows you run your tests on different machines against different browsers in parallel.


# Installation

### Create first package.json file
```sh
npm init
```

### Install Cucumber
```sh
npm install cucumber
```

### Install plugin for Gherkin support in VSC
```sh
Cucumber (Gherkin) Full Support
```

### Command to run Cucumber feature file

### For run all features
```sh
.\node_modules\.bin\cucumber-js features
```
### For run one feature file
```sh
.\node_modules\.bin\cucumber-js features/loginExam01.feature
.\node_modules\.bin\cucumber-js features/loginExam02.feature
.\node_modules\.bin\cucumber-js features/loginExam03.feature
```
### Command to run Scenario with tag
```sh
.\node_modules\.bin\cucumber-js --tags @prod
.\node_modules\.bin\cucumber-js --tags @dev
```
### Cucumber HTML Report

### Install:
```sh
npm install cucumber-html-reporter --save-dev
```
### Create json file for cucumber report:
```sh
.\node_modules\.bin\cucumber-js --format=json:cucumber_report.json
```
### Create index.js file example:
```sh
var reporter = require('cucumber-html-reporter');
 
var options = {
        theme: 'bootstrap',
        jsonFile: './cucumber_report.json',
        output: './cucumber_report.html',
        reportSuiteAsScenarios: true,
        launchReport: true,
        metadata: {
            "App Version":"0.3.2",
            "Test Environment": "DEV",
            "Browser": "Chrome  54.0.2840.98",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Local"
        }
    };
 
    reporter.generate(options);
```
### Run Cucumber HTML report
```sh
node index.js
```
### Define one command in package.json to generate Cucumber HTML report:
```sh
Example:
{
  "name": "cucumberjsbasics",
  "version": "1.0.0",
  "description": "npm init  - package.json",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "generateCucumberReport":".\\node_modules\\.bin\\cucumber-js --format=json:cucumber_report.json && node index.js"
  },
  ```

### Run this command that we define in package.json for generate Cucumber HTML report :
```sh
npm run generateCucumberReport
```
### Install Protractor
```sh
npm install -g protractor
```
### Installing and Starting the Server

To install and start the standalone Selenium Server manually, use the webdriver-manager command line tool, which comes with Protractor.

1. Run the update command: webdriver-manager update This will install the server and ChromeDriver.
```sh
webdriver-manager update
```
2. Run the start command: webdriver-manager start This will start the server. You will see a lot of output logs, starting with INFO. The last line will be 'Info - Started org.openqa.jetty.jetty.Server'.
```sh
webdriver-manager start
```
3. Leave the server running while you conduct your test sessions.

4. In your config file, set seleniumAddress to the address of the running server. This defaults to http://localhost:4444/wd/hub.

or you can update your Selenium webdriver for e.g. like this:
```sh
webdriver-manager update --versions.chrome=2.46
```
### Install Protractor-cucumber-framework
```sh
npm install protractor-cucumber-framework --save-dev
```
### Run Protractor-Cucumber-framework
```sh
protractor protractor.conf.js
```
or we define in package.json another command
```sh
{
"name": "cucumberjsbasics",
  "version": "1.0.0",
  "description": "npm init  - package.json",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "generateCucumberReport": ".\\node_modules\\.bin\\cucumber-js --format=json:cucumber_report.json && node index.js",
    "protractorCucumberTest":"protractor protractor.conf.js && node index.js"
  }
}
```
Example:
```sh
npm run protractorCucumberTest
```

### Install Protractor multiple cucumber html reporter plugin
```sh
npm install protractor-multiple-cucumber-html-reporter-plugin --save-dev
```
and we must define this report in protractor.conf.js
```sh
plugins: [{
    package: require.resolve('protractor-multiple-cucumber-html-reporter-plugin'),
    options: {
      automaticallyGenerateReport: true,
      removeExistingJsonReportFile: true,
      removeOriginalJsonReportFile: true,
      openReportInBrowser: true,
      metadataKey: true,
      reportName: 'CucumberJS Report',
      pageFooter: '<div><p>Created by Predrag popovic</p></div>',
      pageTitle: 'Cucumber JS with Protractor Report',
      customData: {
        title: 'Execution info',
        data: [
          { label: 'Project', value: 'Custom project' },
          { label: 'Release', value: '1.2.3' },
          { label: 'Cycle', value: 'B11221.34321' },
          { label: 'Execution Start Time', value: 'Nov 19th 2017, 02:31 PM EST' },
          { label: 'Execution End Time', value: 'Nov 19th 2017, 02:56 PM EST' }
        ],
        metadata: [
          {name: 'Environment v.', value: '12.3'},
          {name: 'Plugin v.', value: '32.1'},
          {name: 'Variable set', value: 'Foo'}
      ],
      },
      displayDuration:true
    }
  }],
  ```

### Install Chai Assertion Library
```sh
npm install chai --save
npm install chai-as-promised
```
### Install Properties-Reader
```sh
npm install properties-reader
```
