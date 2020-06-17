exports.config = {
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://uitest.duodecadits.com',
      show: true,
      windowSize: '1200x900',
      waitForTimeout: 10000
    }
  },
  include: {
    I: './steps_file.js',
    homePage: './pages/Home.js',
    formPage: './pages/Form.js',
    helloPage: './pages/Hello.js',
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: [
      './step_definitions/steps.js',
      './Tests/stepDefinitions/homePage.js',
      './Tests/stepDefinitions/formPageSteps.js',
      './Tests/stepDefinitions/errorPageSteps.js'
    ],
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    }
  },
  tests: './*_test.js',
  name: 'CodeceptJS'
}