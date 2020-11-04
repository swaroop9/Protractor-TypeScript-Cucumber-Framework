import { Given, Then, When } from "cucumber";
import { browser } from "protractor";
import { Calculator } from "../PageObjects/calculator";
import {expect} from "chai";

let calc = new Calculator()

 Given('Navigate to the website', async () => {
    // Write code here that turns the phrase above into concrete actions

        await browser.get('http://juliemr.github.io/protractor-demo/');

  });

  When('Add to Number {string} and {string}', async (value1, value2) => {
    // Write code here that turns the phrase above into concrete actions  

        await  calc.firstEditBox.sendKeys(value1);
        await calc.secondEditBox.sendKeys(value2);
        await calc.goButton.click();

  });
  
  Then('The output should be {string}', async (result) =>{
    // Write code here that turns the phrase above into concrete actions

        let text:String = await calc.getResult.getText()
        console.log(text)
        expect(text).to.equal(result)
   
   });
