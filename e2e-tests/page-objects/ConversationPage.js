const { expect } = require("@playwright/test");

exports.ConversationPage = class ConversationPage {
  constructor(page) {
    this.page = page;
    this.logout = page.locator(".logout-btn");
    this.converstationTitle = page.locator(".inline-block.pos-rel h2");
    this.enterMessage = page.locator(".autocompleter-wrapper div:first-child");
    this.addMessage = page.locator("[ng-click='$ctrl.addMessage();']");
    this.expandPlusIcon = page.locator(".md-icon-button.md-button .material-icons.fa-plus");
    this.openQuickReplies = page.locator("//md-menu-item[contains(., 'Quick Replies')]");
    this.firstTitle = page.locator("(//div[contains(@class, 's-text-input input')])[1]");
    this.secondTitle = page.locator("(//div[contains(@class, 's-text-input input')])[2]");
    this.addAnoterAutoReply = page.locator("//form//a[contains(.,'Add')]");
    this.expandSecondAutoReply = page.locator("//span[contains(., 'Button #2')]");
    this.addAutoReplies = page.locator("//button[contains(., 'Apply')]");
    this.selectFirstAutoReplyNode = page.locator("//div[.='Yes' and @ng-bind-html]");
    this.selectSecondAutoReplyNode = page.locator("//div[.='No' and @ng-bind-html]");
    this.createNew = page.locator("ul li:nth-child(1) s-navigation-item");
    this.saveBtn = page.locator("//span[@role and .='Save']");
    this.successMessage = page.locator("//div[contains(., 'Saved successfully') and @class='message']");
    this.addiotionalActions = page.locator(".fa.fa-angle-down.fa-caret-down");
    this.activateBtn = page.locator("//button[contains(.,'Activate')]");
    this.activateBtnPopup = page.locator("//md-dialog//button[contains(.,'Activate')]");
    this.activeStatus = page.locator("md-chip.s-label.s-label-success");
    this.plusIconMessageLog = page.locator("(//md-icon[@md-font-icon='fa-plus'])[1]");
    this.quickRepliesMessageLog = page.locator("(//md-icon[@aria-label='Quick Replies'])[1]");
  }


  async logoutIsVisible(){
    await expect(this.logout).toBeVisible();
}

  async createNewCoversation(){
    await this.createNew.click();
    await this.converstationTitle.fill('');
    await this.converstationTitle.type('Return an Order');
}

async addNewMessage(value){
    await this.enterMessage.type(value);
    await this.addMessage.click();
}

async addNewMessage(){
  await this.enterMessage.type('Do you want to return order?');
  await this.addMessage.click();
}

async enterFirstTitle(value){
  await this.firstTitle.type(value);
}

async enterSecondTitle(value){
  await this.secondTitle.type(value);
}

async openQuickRepliesOption(){
  await this.expandPlusIcon.click();
  await this.openQuickReplies.click();
}

async expandSecondAutoReplyNode(){
  await this.expandSecondAutoReply.click();
}

async addSecondAutoReplyNode(){
  await this.addAnoterAutoReply.click();
}
async submitAutoReplies(){
  await this.addAutoReplies.click();
}

async createAutoRepliesNodes(){
  await this.openQuickRepliesOption();
  await this.enterFirstTitle('Yes');
  await this.addSecondAutoReplyNode();
  await this.expandSecondAutoReplyNode();
  await this.enterSecondTitle('No');
  await this.submitAutoReplies();
}



  async selectFirstNode() {
    await this.page.waitForLoadState('domcontentloaded');
    await this.selectFirstAutoReplyNode.waitFor();
    await this.selectFirstAutoReplyNode.click();
  }

  async selectSecondNode() {
    
    await this.selectSecondAutoReplyNode.waitFor();
    await this.selectSecondAutoReplyNode.click();
  }

  async saveConversation() {
    await this.saveBtn.click();
    await expect(this.successMessage).toBeVisible();
    
  }
  async activateConversationAndVerify() {
    
    await this.addiotionalActions.click();
    await this.activateBtn.click();
    await this.activateBtnPopup.click();
    await expect(this.activeStatus).toBeVisible();
  }


  async openQuickRepliesOptionFromMessageLog(){
    await this.plusIconMessageLog.click();
    await this.quickRepliesMessageLog.click();
    await this.enterFirstTitle('Yes');
    await this.addSecondAutoReplyNode();
    await this.expandSecondAutoReplyNode();
    await this.enterSecondTitle('No');
    await this.submitAutoReplies();
  }

};
