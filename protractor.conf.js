var PropertiesReader = require('properties-reader');
var prop = PropertiesReader('./properties/prop.properties');

exports.config = {
  seleniumAddress: prop.get('seleniumAddress'),
  //directConnect:true,
  getPageTimeout: prop.get('getPageTimeout'),
  allScriptTimeout: prop.get('allScriptTimeout'),

  framework: 'custom',

  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  // run Multiple Browsers in the Same Test

  multiCapabilities: [{
    'browserName': 'firefox',
    'moz:firefoxOptions': {

      args: ['--headless', '--disable-gpu', 'disable-infobars', '--window-size=1920,1080']
    }

  }, {

    'browserName': 'chrome',
    'chromeOptions': {

      args: ['--headless','--disable-gpu', 'disable-infobars', '--window-size=1920,1080']
    }
  }],

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
          { name: 'Environment v.', value: '12.3' },
          { name: 'Plugin v.', value: '32.1' },
          { name: 'Variable set', value: 'Foo' }
        ],
      },
      displayDuration: true
    }
  }],

  maxSessions: 2,

  // run browser
  /*
  capabilities: {
    'browserName': 'chrome',

    chromeOptions: {
      args: ["--window-size=1920,1080"]
    }
  },
  */

  // require feature files
  specs: [
    prop.get('featurePath') // accepts a glob
  ],

  cucumberOpts: {
    // require step definitions
    tags: true,

    // Report format Cucumber HTML report
    //format: 'json:cucumber_report.json',

    // Report format multiple cucumber html reporter
    format: 'json:.tmp/results.json',

    require: [
      prop.get('stepDefinitionsPath') // accepts a glob
    ]
  }
};