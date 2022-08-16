const { test } = require("@playwright/test");
const { LoginPage } = require("./page-objects/LoginPage");
const { ConversationPage } = require("./page-objects/ConversationPage");

test.describe("Login Tests", () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.doLogin();
  
  });

  test("Verify user is able to login in application succesfully", async ({ page }) => {
    const conversation = new ConversationPage(page);
    await conversation.logoutIsVisible();
  

  });
});
