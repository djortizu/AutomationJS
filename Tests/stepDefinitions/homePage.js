
const { I, homePage } = inject();

//#region Scenario No. 1
Given('I navigated to the website.', () => {
  I.amOnPage('/')
});

When('I click on the Home button', () => {
  I.waitForVisible(homePage.elements.dhlogo)
  I.click(homePage.elements.homeButton)
});

Then('I should be navigated to the Home page', () => {
  I.waitForVisible(homePage.elements.dhlogo)
});

Then('the Home button should be active', () => {
  I.seeAttributesOnElements('//li[@class="active"]', { class: "active"});
});
//#endregion

//#region Scenario No. 2
Given('I navigate to the website.', () => {
  I.amOnPage('/')
});

When('I click on the UI Testing button', () => {
  I.waitForVisible(homePage.elements.dhlogo)
  I.click(homePage.elements.siteButton)
});

Then('I should get navigated to the Home page', () => {
  I.waitForVisible(homePage.elements.dhlogo)
});
//#endregion

//#region Scenario No. 3
Given('I am on the website', () => {
  I.amOnPage('/')
});

When('I am navigating the Home page', () => {
  I.waitForVisible(homePage.elements.heading)
});

Then('I should see the text {string}', (siteTitle) => {
  I.see(siteTitle)
});

Then('it should be in an H1 tag', () => {
  I.seeElementInDOM(homePage.elements.title)
});
//#endregion

//#region Scenario No. 4
Given('I am on the website', () => {
  I.amOnPage('/')
});

When('I am on the Home page', () => {
  I.waitForVisible(homePage.elements.heading)
});

Then('I should see the Docler Holding Company Logo', () => {
  I.seeElement(homePage.elements.dhlogo)
});
//#endregion

//#region Scenario No. 5
Given('I am on the website', () => {
  I.amOnPage('/')
});

When('I am navigating on the Home page', () => {
  I.waitForVisible(homePage.elements.heading)
});

Then('I should see the text {string}', (siteDescription) => {
  I.see(siteDescription)
});

Then('it should be in an p tag', () => {
  I.seeElementInDOM(homePage.elements.heading)
});
//#endregion

//#region  Scenario No. 6
Given('I am on the website', () => {
  I.amOnPage('/')
});

When('I am navigating on the Home page', () => {
  I.waitForVisible(homePage.elements.heading)
});

Then('I should see {string} on the title', (title) => {
  I.seeTitleEquals(title)
});
//#endregion

