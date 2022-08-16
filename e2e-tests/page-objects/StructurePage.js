const { expect } = require("@playwright/test");

exports.StructurePage = class StructurePage {
  constructor(page) {
    this.page = page;
    this.structureLeftMenu = page.locator("ul li:nth-child(2) s-navigation-item");
    this.conversationSection = page.locator("ul li:nth-child(2) s-navigation-item li:first-child");


    this.draftTab = page.locator("//button[contains(.,'Draft')]");
    this.titleFirstRow = page.locator("//div[@class='s-table']//div[@class='s-list-row'][1]//div[@col-ident='title']//span[@role]");
    this.allRows = page.locator("//div[@class='s-table']//div[@class='s-list-row']");
  
  }

  async openStructureFromLeftMenu() {
    await this.structureLeftMenu.click(); 
    
  }

  async openConversationSection() {
    await this.conversationSection.click(); 
    
  }

  async openDraftTab() {
    await this.page.waitForLoadState('domcontentloaded');
    await this.draftTab.waitFor();
    await this.draftTab.click(); 
  }

 

  async goToDraftsInConversation() {
    await this.openStructureFromLeftMenu();
    await this.openConversationSection();
    
  }

  async allCoversationsCount() {
    await this.allRows.count()
    
  }
  
};
