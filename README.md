# AutomationJS

## Docler Holding QA Automation Assignment
**Framework:** CodeceptJS + Puppeteer<br>
**Test Approach:** BDD<br>
**Features tested:** 3<br>

### Home Page test requirements
- [x] Home page button must navigate to Home Page. Priority: High
- [x] UI Testing button must navigate to Home Page. Priority: High
- [x] Docler Holding logo must been seen. Priority: Moderate
- [x] Site title must say UI Testing Site. Priority: Moderate
- [x] Site description must bee seen and have a P tag. Priority: Low
- [x] Docler QA Department text must be seen and be in H1 tag. Priority: Low
- [x] Home page button must be active after click. Priority: Low

### Form Page test requirements
- [x] Form page button must navigate to Home Page. Priority: High
- [x] A form should be visible with one input box and one submit button. Priority: High
- [x] When submitting data, user must be forwarded to Hello page and see a "Hello, name!" message. Priority: High
- [x] Docler Holding logo must been seen. Priority: Moderate
- [x] Site title must say UI Testing Site. Priority: Moderate
- [x] Form page button must be active after click. Priority: Low

### Error Page test requirements
- [x] When I click on the Error button, I should get a 404 HTTP response code. Priority: High

## File structure
Features are located in the 'features' folder, while scenario steps are located in the 'Tests\stepScenarios' path<br>
PageObjects are housed in the 'pages' folder.

**List of Features**
1. Home Page -- homePage.feature
2. Form Page -- formPage.feature
3. Error Page -- errorPage.feature

**Page Objects**
1. Home
2. Form
