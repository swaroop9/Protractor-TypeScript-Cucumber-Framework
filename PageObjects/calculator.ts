import { ElementFinder } from "protractor";

import {element,by} from "protractor"

export class Calculator {

    firstEditBox: ElementFinder
    secondEditBox: ElementFinder
    goButton:ElementFinder
    getResult:ElementFinder

    constructor(){
       this.firstEditBox = element(by.model('first'))
       this.secondEditBox = element(by.model('second'))
       this.goButton = element(by.id('gobutton'))
       this.getResult = element(by.css('h2[class="ng-binding"]'))

    }

}