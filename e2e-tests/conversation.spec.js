const { test, expect } = require("@playwright/test");
const { LoginPage } = require("./page-objects/LoginPage");
const { ConversationPage } = require("./page-objects/ConversationPage");
const { StructurePage } = require("./page-objects/StructurePage");


test.describe("Login Tests", () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    const conversation = new ConversationPage(page);
    await loginPage.navigate();
    await loginPage.doLogin();
    await conversation.logoutIsVisible(); 
  });

  test("Verify if user create, save (From plus icon in bottom) and activate conversation the it should be appear in Actiavte conversation list", async ({ page }) => {
    const conversation = new ConversationPage(page);
    const structure = new StructurePage(page);

    // Create conversation
    await conversation.createNewCoversation();
    // Add a message
    await conversation.addNewMessage();
    // Create auto replies
    await conversation.createAutoRepliesNodes();
    // Select auto replies node and message for corrosponding nodes
    await conversation.selectFirstNode();
    await conversation.addNewMessage('You will get refund in 2-3 business days in your bank account'); 
    await conversation.selectSecondNode();
    await conversation.addNewMessage('Great! You are still eligible to return order within 30 days.'); 
    // Save conversation 
    await conversation.saveConversation();
    // Activate  conversation and verify status
    await conversation.activateConversationAndVerify();
    // Go to activate conversations list and verify first one
    await structure.goToDraftsInConversation();
    await expect(structure.titleFirstRow).toHaveText('Return an Order');

  });

  test("Verify if user create, save (from plus icon in Message Log) and activate conversation the it should be appear in Actiavte conversation list", async ({ page }) => {
    const conversation = new ConversationPage(page);
    const structure = new StructurePage(page);

    // Create conversation
    await conversation.createNewCoversation();
    // Add a message
    await conversation.addNewMessage();
    // Create auto replies
    await conversation.openQuickRepliesOptionFromMessageLog();
    // Select auto replies node and message for corrosponding nodes
    await conversation.selectFirstNode();
    await conversation.addNewMessage('You will get refund in 2-3 business days in your bank account'); 
    await conversation.selectSecondNode();
    await conversation.addNewMessage('Great! You are still eligible to return order within 30 days.'); 
    // Save conversation 
    await conversation.saveConversation();
    // Activate  conversation and verify status
    await conversation.activateConversationAndVerify();
    // Go to activate conversations list and verify first one
    await structure.goToDraftsInConversation();
    await expect(structure.titleFirstRow).toHaveText('Return an Order');

  });


});
