import { test, expect } from '@playwright/test';

test.describe("register thanh cong", async () => {
  test('testcase 1: input information thanh cong', async ({ page }) => {
    await test.step('step 1: go to material page', async () => {
      await page.goto('https://material.playwrightvn.com/');
    });
    await test.step('step 2: open lesson 1', async () => {
      await page.getByRole('link', { name: 'Bài học 1: Register Page' }).click();
    });
    await test.step('step 3: input information', async () => {
      await page.getByLabel("Username").fill("Linh Chi");
      await page.getByLabel("Email").fill("linhchi@test.com");
      await page.getByLabel("Female").check();
      await page.getByLabel("Reading").check();
      await page.getByLabel("Interests").selectOption("Sports");
      await page.getByLabel("Country").selectOption("Canada");
      await page.getByLabel("Date of Birth").fill("1993-03-28");
      await page.getByLabel("Profile Picture").setInputFiles("tests/lesson-05/test.jpg");
      await page.getByLabel("Biography").fill("My name is Linh Chi and I am learning Playwright.");
    });
    await test.step('step 4: submit Register form', async () => {
      await page.getByRole('button', { name: 'Register' }).click();
    });
  });
})
