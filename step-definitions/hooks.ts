import {After, Before, Status} from "cucumber";
import { browser } from "protractor";

// Before(function() {
    
//     browser.manage().window().maximize();
//     console.log("Before with No Tag")

// })

After(async function(scenario) {
    
    console.log("After with No Tag")
    //Capture SCreenshot
    if (scenario.result.status === Status.FAILED) {
       const screentshot = await browser.takeScreenshot()
       this.attach(scenario,'image/png')
    }
})


Before({tags:'@addTest'},function() {
    
    console.log("Before with Tag")

})

After({tags:'@addTest'},function() {
    
    console.log("After with Tag")
    
})