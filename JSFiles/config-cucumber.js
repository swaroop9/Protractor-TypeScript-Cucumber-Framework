"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reporter = require("cucumber-html-reporter");
exports.config = {
    // The address of a running selenium server.
    //   seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
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
        tags: '@addTest',
        format: 'json:./reports/cucumber_report.json',
        onComplete: () => {
            var options = {
                theme: 'bootstrap',
                jsonFile: './reports/cucumber_report.json',
                output: './reports/cucumber_report.html',
                screenshotsDirectory: 'screenshots/',
                reportSuiteAsScenarios: true,
                launchReport: true,
                metadata: {
                    "App Version": "0.3.2",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLWN1Y3VtYmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29uZmlnLWN1Y3VtYmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsbURBQW1EO0FBR3hDLFFBQUEsTUFBTSxHQUFXO0lBQzFCLDRDQUE0QztJQUM5QyxxREFBcUQ7SUFDckQsYUFBYSxFQUFDLElBQUk7SUFFakIsdUNBQXVDO0lBQ3ZDLFNBQVMsRUFBRSxRQUFRO0lBRW5CLDJDQUEyQztJQUMzQyxhQUFhLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQztJQUU5RCx1REFBdUQ7SUFDdkQsWUFBWSxFQUFFO1FBQ1osV0FBVyxFQUFFLFFBQVE7S0FDdEI7SUFFSCx3QkFBd0I7SUFDeEIsS0FBSyxFQUFFO1FBQ0wseUJBQXlCLENBQUMsaUJBQWlCO0tBQzVDO0lBRUMsWUFBWSxFQUFFO1FBQ1osMkJBQTJCO1FBQzNCLElBQUksRUFBQyxVQUFVO1FBQ2YsTUFBTSxFQUFDLHFDQUFxQztRQUM1QyxVQUFVLEVBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxPQUFPLEdBQUc7Z0JBQ1osS0FBSyxFQUFFLFdBQVc7Z0JBQ2xCLFFBQVEsRUFBRSxnQ0FBZ0M7Z0JBQzFDLE1BQU0sRUFBRSxnQ0FBZ0M7Z0JBQ3hDLG9CQUFvQixFQUFFLGNBQWM7Z0JBQ3BDLHNCQUFzQixFQUFFLElBQUk7Z0JBQzVCLFlBQVksRUFBRSxJQUFJO2dCQUNsQixRQUFRLEVBQUU7b0JBQ04sYUFBYSxFQUFDLE9BQU87b0JBQ3JCLGtCQUFrQixFQUFFLFNBQVM7b0JBQzdCLFNBQVMsRUFBRSxzQkFBc0I7b0JBQ2pDLFVBQVUsRUFBRSxZQUFZO29CQUN4QixVQUFVLEVBQUUsV0FBVztvQkFDdkIsVUFBVSxFQUFFLFFBQVE7aUJBQ3ZCO2FBQ0osQ0FBQztZQUNGLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0IsQ0FBQztRQUNELE9BQU8sRUFBRTtZQUNQLHlCQUF5QixDQUFDLGlCQUFpQjtTQUM1QztLQUNGO0NBRUYsQ0FBQyJ9