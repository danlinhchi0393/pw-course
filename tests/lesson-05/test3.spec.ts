import { test, expect } from '@playwright/test';

test.describe("to do list", async () => {
    test('testcase 1: add/delete to do item successfully', async ({ page }) => {
        await test.step('step 1: go to material page', async () => {
            await page.goto('https://material.playwrightvn.com/');
        });
        await test.step('step 2: open lesson 3', async () => {
            await page.getByRole('link', { name: 'Bài học 3: Todo page' }).click();
        });
        await test.step('step 3: add 100 to do item', async () => {
            for (let i = 0; i < 100; i++) {
                let itemValue = `Todo ${i + 1}`;
                await page.getByPlaceholder('Enter a new task').fill(itemValue);
                await page.getByRole('button', { name: 'Add Task' }).click();
            }
        });
        await test.step('step 4: delete items', async () => {
            page.on('dialog', async (dialog) => {
                await dialog.accept();
            });
            for (let i = 99; i >= 0; i--) {
                if (i % 2 === 0) {
                    await page.getByRole('button', { name: 'Delete' }).nth(i).click();
                }
            }
        });
    })
})
