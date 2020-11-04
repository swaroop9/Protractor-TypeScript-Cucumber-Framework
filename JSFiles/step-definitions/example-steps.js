"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const calculator_1 = require("../PageObjects/calculator");
const chai_1 = require("chai");
let calc = new calculator_1.Calculator();
cucumber_1.Given('Navigate to the website', () => __awaiter(this, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
}));
cucumber_1.When('Add to Number {string} and {string}', (value1, value2) => __awaiter(this, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions  
    yield calc.firstEditBox.sendKeys(value1);
    yield calc.secondEditBox.sendKeys(value2);
    yield calc.goButton.click();
}));
cucumber_1.Then('The output should be {string}', (result) => __awaiter(this, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    let text = yield calc.getResult.getText();
    console.log(text);
    chai_1.expect(text).to.equal(result);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS1zdGVwcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3N0ZXAtZGVmaW5pdGlvbnMvZXhhbXBsZS1zdGVwcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUNBQTZDO0FBQzdDLDJDQUFxQztBQUNyQywwREFBdUQ7QUFDdkQsK0JBQTRCO0FBRTVCLElBQUksSUFBSSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFBO0FBRTFCLGdCQUFLLENBQUMseUJBQXlCLEVBQUUsR0FBUyxFQUFFO0lBQ3pDLG9FQUFvRTtJQUVoRSxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7QUFFckUsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyxxQ0FBcUMsRUFBRSxDQUFPLE1BQU0sRUFBRSxNQUFNLEVBQUUsRUFBRTtJQUNuRSxzRUFBc0U7SUFFbEUsTUFBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMxQyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzFDLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUVsQyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLCtCQUErQixFQUFFLENBQU8sTUFBTSxFQUFFLEVBQUU7SUFDckQsb0VBQW9FO0lBRWhFLElBQUksSUFBSSxHQUFVLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtJQUNoRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ2pCLGFBQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0FBRWxDLENBQUMsQ0FBQSxDQUFDLENBQUMifQ==