const { assert } = require("console");

const { I, homePage } = inject();
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

//#region Scenario No. 1
Given('I am on the website', () => {
    I.amOnPage('/')
    I.waitForVisible(homePage.elements.dhlogo)
});

When('I click on the Error button', () => {
    I.click(homePage.elements.errorButton)
});

Then('I should get a "404" response', () => {
    I.seeInCurrentUrl('/error')
    var xhr = new XMLHttpRequest();
    var responseText;
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function() {
    if(this.readyState === 4) {
        responseText = this.responseText;
        xhr.open("GET", "http://uitest.duodecadits.com/error");
        xhr.send();
    }
    assert(responseText.value.includes("404"), "404")
});


});
//#endregion
