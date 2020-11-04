import {Config} from 'protractor';
import * as reporter from "cucumber-html-reporter";


export let config: Config = {
  // The address of a running selenium server.
//   seleniumAddress: 'http://localhost:4444/wd/hub',
directConnect:true,

 // set to "custom" instead of cucumber.
 framework: 'custom',

 // path relative to the current config file
 frameworkPath: require.resolve('protractor-cucumber-framework'),

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: 'chrome'
  },

// require feature files
specs: [
  '../feature/**/*.feature' // accepts a glob
],

  cucumberOpts: {
    // require step definitions
    tags:'@addTest',
    format:'json:./reports/cucumber_report.json',
    onComplete:() => {
      var options = {
        theme: 'bootstrap',
        jsonFile: './reports/cucumber_report.json',
        output: './reports/cucumber_report.html',
        screenshotsDirectory: 'screenshots/',
        reportSuiteAsScenarios: true,
        launchReport: true,
        metadata: {
            "App Version":"0.3.2",
            "Test Environment": "STAGING",
            "Browser": "Chrome  54.0.2840.98",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        }
    };
    reporter.generate(options);
    },
    require: [
      './step-definitions/*.js' // accepts a glob
    ]
  }
 
};
