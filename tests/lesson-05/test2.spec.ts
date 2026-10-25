
import { test, expect } from '@playwright/test';

test.describe("add to cart", async () => {
  test('testcase 1: add to cart thanh cong', async ({ page }) => {
    await test.step('step 1: go to material page', async () => {
      await page.goto('https://material.playwrightvn.com/');
    });
    await test.step('step 2: open lesson 2', async () => {
      await page.getByRole('link', { name: 'Bài học 2: Product page' }).click();
    });
    await test.step('step 3: add product 1 to cart', async () => {
      for (let i = 0; i < 2; i++) {
        await page.getByRole('button', { name: 'Add to cart' }).first().click();
      }
    });
    await test.step('step 4: add product 2 to cart', async () => {
      for (let i = 0; i < 3; i++) {
        await page.getByRole('button', { name: 'Add to cart' }).nth(1).click();
      }
    });
    await test.step('step 5: add product 3 to cart', async () => {
      await page.getByRole('button', { name: 'Add to cart' }).nth(2).click();
    });
  })
})
