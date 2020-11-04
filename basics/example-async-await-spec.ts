import {browser,element,by} from "protractor"
import { Calculator } from "./PageObjects/calculator";

describe('Protractor Demo App', async () => {
    it('should add one and two', async () =>{

        await browser.get('http://juliemr.github.io/protractor-demo/');
        
        let calc = new Calculator()
        await  calc.firstEditBox.sendKeys(1);
        await calc.secondEditBox.sendKeys(2);
        await calc.goButton.click();

        let text:String = await calc.getResult.getText()

        console.log(text)

        expect(text).toBe("3")

        //Repeater, chaining, child elements
        // element(by.repeater('result in memory')).element(by.css('td:nth-child(3)')).getText().then(function(text){
        //     console.log(text)
        // })
        
    
    });
  });