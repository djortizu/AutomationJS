
const { I, homePage } = inject();

//#region Home button
Given('I navigate to the website.', () => {
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

//#region Clicking on UI Testing button
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

//#region Docler Holdings QA Dept
Given('I am on the website', () => {
  I.amOnPage('/')
});

When('I am navigating the Home page', () => {
  I.waitForVisible(homePage.elements.heading)
});

Then('I should see the text "Welcome to the Docler Holding QA Department"', () => {
  I.seeTextEquals('Welcome to the Docler Holding QA Department', homePage.elements.title)
});

Then('it should be in an H1 tag', () => {
  I.seeElementInDOM(homePage.elements.title)
});
//#endregion

//#region Site Description
Given('I am on the website', () => {
  I.amOnPage('/')
});

When('I am navigating on the Home page', () => {
  I.waitForVisible(homePage.elements.dhlogo)
});

Then('I should see the text "This site is dedicated to perform some exercises and demonstrate automated web testing."', () => {
  I.seeTextEquals('This site is dedicated to perform some exercises and demonstrate automated web testing.', homePage.elements.heading);
});

Then('it should be in an p tag', () => {
 I.seeElementInDOM(homePage.elements.heading)
});
//#endregion

//#region Site Title
  Given('I am on the website', () => {
     I.amOnPage('/')
  });

  When('I am navigating the Home page', () => {
    I.waitForVisible(homePage.elements.dhlogo)
    //let siteTitle = I.grabTitle();
  });

  Then('I should see "UI Testing Site" on the title', () => {
    I.seeTitleEquals('UI Testing Site')
  });
//#endregion
