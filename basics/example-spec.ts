import {browser,element,by} from "protractor"

describe('Protractor Demo App', function() {
    it('should add one and two', function() {

        browser.get('http://juliemr.github.io/protractor-demo/');

        element(by.model('first')).sendKeys(1);
        element(by.model('second')).sendKeys(2);
        element(by.id('gobutton')).click();

        // element(by.css('h2[class="ng-binding"]')).getText().then(function(text){
        //     console.log("text", text)
        // })

        expect(element(by.css('h2[class="ng-binding"]')).getText()).toBe("3")

        //Repeater, chaining, child elements
        // element(by.repeater('result in memory')).element(by.css('td:nth-child(3)')).getText().then(function(text){
        //     console.log(text)
        // })
        
    
    });
  });