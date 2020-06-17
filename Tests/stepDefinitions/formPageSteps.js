const { I, formPage, helloPage, homePage } = inject();

//#region Scenario No. 1
Given('I am navigating on the website', () => {
  I.amOnPage('/')
});

When('I click on the Form button', () => {
  I.waitForVisible(homePage.elements.dhlogo)
  I.click(homePage.elements.formButton)
});

Then('I should be navigated to the Form page', () => {
  I.waitForVisible(formPage.elements.inputBox)
  I.seeElement(formPage.elements.inputBox)
  I.seeInCurrentUrl('/form.html')
});

Then('the button should be in active status', () => {
  I.seeAttributesOnElements('//li[@class="active"]', { class: "active"});
});
//#endregion

//#region Scenario No. 2
Given('I am navigating on the Form page', () => {
  I.amOnPage('/')
  I.waitForVisible(homePage.elements.dhlogo)
  I.click(homePage.elements.formButton)
  I.waitForVisible(formPage.elements.inputBox)
});

When('I enter {string} in the input box', (Name) => {
  I.fillField(formPage.elements.inputBox, Name)
});

When('click on Go!', () => {
  I.click(formPage.elements.submissionBtn)
});

Then('I should be navigated to the Hello Page', () => {
  I.waitForElement(helloPage.elements.greeter)
  I.seeInCurrentUrl('/hello.html')
});

Then('I should see a text that reads {string}', (Result) => {
  I.see(Result)
});
//#endregion

//#region Scenario No. 3
Given('I am navigating on the Form page', () => {
  I.amOnPage('/')
  I.waitForVisible(homePage.elements.dhlogo)
  I.click(homePage.elements.formButton)
});

When('I see the title of the page', () => {
  I.waitForVisible(formPage.elements.inputBox)
});

Then('I should see {string}', (siteTitle) => {
  I.seeTitleEquals(siteTitle)
});
//#endregion

//#region Scenario No. 4
Given('I am navigating to the Form page', () => {
  I.amOnPage('/')
  I.waitForVisible(homePage.elements.dhlogo)
  I.click(homePage.elements.formButton)
});

When('I am on the Form page', () => {
  I.waitForVisible(formPage.elements.inputBox)
});

Then('I should see the Company Logo', () => {
  I.seeElement(homePage.elements.dhlogo)
});
//#endregion
