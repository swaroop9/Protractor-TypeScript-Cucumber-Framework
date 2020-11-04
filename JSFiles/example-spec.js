"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
describe('Protractor Demo App', function () {
    it('should add one and two', function () {
        protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
        protractor_1.element(protractor_1.by.model('first')).sendKeys(1);
        protractor_1.element(protractor_1.by.model('second')).sendKeys(2);
        protractor_1.element(protractor_1.by.id('gobutton')).click();
        // element(by.css('h2[class="ng-binding"]')).getText().then(function(text){
        //     console.log("text", text)
        // })
        expect(protractor_1.element(protractor_1.by.css('h2[class="ng-binding"]')).getText()).toBe("3");
        //Repeater, chaining, child elements
        // element(by.repeater('result in memory')).element(by.css('td:nth-child(3)')).getText().then(function(text){
        //     console.log(text)
        // })
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS1zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vZXhhbXBsZS1zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQTZDO0FBRTdDLFFBQVEsQ0FBQyxxQkFBcUIsRUFBRTtJQUM1QixFQUFFLENBQUMsd0JBQXdCLEVBQUU7UUFFekIsb0JBQU8sQ0FBQyxHQUFHLENBQUMsMkNBQTJDLENBQUMsQ0FBQztRQUV6RCxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRW5DLDJFQUEyRTtRQUMzRSxnQ0FBZ0M7UUFDaEMsS0FBSztRQUVMLE1BQU0sQ0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBRXJFLG9DQUFvQztRQUNwQyw2R0FBNkc7UUFDN0csd0JBQXdCO1FBQ3hCLEtBQUs7SUFHVCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIn0=