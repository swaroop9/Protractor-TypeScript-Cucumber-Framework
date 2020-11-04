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
// Before(function() {
//     browser.manage().window().maximize();
//     console.log("Before with No Tag")
// })
cucumber_1.After(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("After with No Tag");
        //Capture SCreenshot
        if (scenario.result.status === cucumber_1.Status.FAILED) {
            const screentshot = yield protractor_1.browser.takeScreenshot();
            this.attach(scenario, 'image/png');
        }
    });
});
cucumber_1.Before({ tags: '@addTest' }, function () {
    console.log("Before with Tag");
});
cucumber_1.After({ tags: '@addTest' }, function () {
    console.log("After with Tag");
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwLWRlZmluaXRpb25zL2hvb2tzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx1Q0FBK0M7QUFDL0MsMkNBQXFDO0FBRXJDLHNCQUFzQjtBQUV0Qiw0Q0FBNEM7QUFDNUMsd0NBQXdDO0FBRXhDLEtBQUs7QUFFTCxnQkFBSyxDQUFDLFVBQWUsUUFBUTs7UUFFekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBO1FBQ2hDLG9CQUFvQjtRQUNwQixJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLGlCQUFNLENBQUMsTUFBTSxFQUFFO1lBQzNDLE1BQU0sV0FBVyxHQUFHLE1BQU0sb0JBQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQTtZQUNsRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBQyxXQUFXLENBQUMsQ0FBQTtTQUNuQztJQUNMLENBQUM7Q0FBQSxDQUFDLENBQUE7QUFHRixpQkFBTSxDQUFDLEVBQUMsSUFBSSxFQUFDLFVBQVUsRUFBQyxFQUFDO0lBRXJCLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtBQUVsQyxDQUFDLENBQUMsQ0FBQTtBQUVGLGdCQUFLLENBQUMsRUFBQyxJQUFJLEVBQUMsVUFBVSxFQUFDLEVBQUM7SUFFcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO0FBRWpDLENBQUMsQ0FBQyxDQUFBIn0=