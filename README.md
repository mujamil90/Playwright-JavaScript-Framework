---
# GUI Automation Framework with Playwright and JavaScript
---

## Features of this framework
* [Design Pattern: Page Object Model](https://playwright.dev/docs/test-pom)
* [Reporting: Allure](https://www.npmjs.com/package/allure-playwright)
* [Cloud Integration: SauceLab](https://saucelabs.com/)
* [Code Formatter: Prettier](https://prettier.io/)
* [Deep Deletion](https://www.npmjs.com/package/rimraf)

## Getting started

### Pre-requisites
* Download and install Node.js
* Download and install any Text Editor like Visual Code/Sublime/Brackets

### Setup Visual Code
* Install GitLens Extension from the Marketplace: `GitLens — Git supercharged by GitKraken https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens`
* Go to Visual Code Preference > Setting and search `formatOnSave` and enable/ON it.

### Setup Scripts 
* Clone the repository into a folder
* Go to Project root directory and install Dependency: `npm install`
* All the dependencies from package.json would be installed in node_modules folder.



### How to Run Test
* Go to Project root directory and run command: `npm test`
* If you want to run e2e tests then run command: `npm run e2e`

### How to Update local npm packages
* Go to Project root directory and run command: `npm update`

### How to view HTML report
* Go to Project root directory: `./playwright-report/index.html`

### How to view failed test screenshot
* Go to Project root directory: `./test-results/`


### Run test with Allure and generate report
* Run tests: `npx playwright test --reporter=line,allure-playwright`
* Generate report : `npx allure generate ./allure-results --clean`
* Open report from commandline : `npx allure open ./allure-report`

### How to run Test on SauceLabs
* [SauceLabs Quickstart](https://docs.saucelabs.com/web-apps/automated-testing/playwright/quickstart/)
    * Set Environment Variables:
        * Open Terminal
        * Run `touch ~/.bash_profile; open ~/.bash_profile`
        * In TextEdit, add
        * `export SAUCE_USERNAME=“YOUR USERNAME”`
        * `export SAUCE_ACCESS_KEY="YOUR ACCESS KEY"`
        * Save the .bash_profile file and Quit (Command + Q) Text Edit.
        * In Terminal echo $SAUCE_USERNAME
        * In Terminal echo $SAUCE_ACCESS_KEY
    * Configure:
    `saucectl config` 
    * Run tests: `npm saucectl run`
