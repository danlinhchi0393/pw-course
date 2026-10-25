import { test, expect } from '@playwright/test';
import actions from './test4.json';
test.describe("Personal notes", async () => {
    test('testcase 1: add notes successfully', async ({ page }) => {
        await test.step('step 1: go to material page', async () => {
            await page.goto('https://material.playwrightvn.com/');
        });
        await test.step('step 2: open lesson 4', async () => {
            await page.getByRole('link', { name: 'Bài học 4: Personal notes' }).click();
        });
        await test.step('step 3: input note successfully', async () => {
            for (let i = 0; i < actions.length; i++) {
                await page.getByLabel('Title').fill(actions[i].title);
                await page.getByLabel('Content').fill(actions[i].content);
                await page.getByRole('button', { name: 'Add Note' }).click();
            }
        });
        await test.step('step 4: search', async() => {
            await page.getByLabel('Search Notes').fill('một hoặc nhiều');
        } )
    }
    )
}
)