const { expect } = require("@playwright/test");

exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.userName = page.locator("#username");
    this.password = page.locator("#password");
    this.submitBtn = page.locator("//button[.='Continue']");
    
  }

  async enterUserName(username) {
    await this.userName.type(username); 
    
  }

  async enterPassword(password) {
    await this.password.type(password); 
  }

  async clickLogin() {
    await this.submitBtn.click();
  }

  async navigate() {
    await this.page.goto("https://qachallenge.spectrm.io/v2/structure");
    
  }
  
  async doLogin() {
    await this.enterUserName('mujamil90@yahoo.co.in');
    await this.clickLogin();
    await this.enterPassword('Challenge@123');
    await this.clickLogin();
  }

};
