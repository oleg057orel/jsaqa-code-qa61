const { test, expect } = require("@playwright/test");
const user = require("../user.js");
const { randomFill } = require("crypto");

test("Successful authorisation", async({page})=> {
    await page.goto("https://netology.ru/?modal=sign_in");
    await page.locator('[placeholder="Email"]').fill(user.email);
    await page.locator('[placeholder="Пароль"]').fill(user.password);
    await page.locator('[data-testid ="login-submit-btn"]').click();
    await expect(page).toHaveURL('https://netology.ru/profile/8515465');
    await expect(page.locator('h2')).toHaveText('Моё обучение');

});
test("Unsuccessful authorisation", async({page})=> {
    await page.goto("https://netology.ru/?modal=sign_in");
    await page.locator('[placeholder="Email"]').fill(`nomail@gmail.com`);
    await page.locator('[placeholder="Пароль"]').fill(`123456pass`);
    await page.locator('[data-testid ="login-submit-btn"]').click();
    await expect(page.locator('[data-testid="login-error-hint"]')).toHaveText('Вы ввели неправильно логин или пароль');
});