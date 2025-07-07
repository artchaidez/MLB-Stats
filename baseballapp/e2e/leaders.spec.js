import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000/leaders');
});

test('Confirm batting table is shown on load', async ({page}) => {

    await expect(page.locator('//div[contains(text(),"wRC+")]')).toBeVisible();

    await expect(page.locator('//td[contains(text(),"218")]')).toBeVisible();

});

test('Click on pitching tab and confirm pitching tab shows', async ({page}) => {

    await page.getByRole('button', { name: 'Pitching'}).click();

    await expect(page.locator('//div[contains(text(),"ERA")]')).toBeVisible();

    await expect(page.locator('//td[contains(text(),"2.38")]')).toBeVisible();
});

test('Click on BsR to sort in descending order and confirm correct order of players', async ({page}) => {

    const correctTableOrder = ["Shohei Ohtani", "Bobby Witt Jr", "Gunner Henderson", "Aaron Judge", "Juan Soto"]

    const tableRows = await page.locator('//tbody[contains(@class,"leader-tbody")]').locator('//tr');

    await expect(tableRows).toHaveCount(5);

    const tableCount = await tableRows.count();

    await page.locator('//div[contains(text(),"BsR")]').click();

    await expect(page.locator('//tbody[contains(@class,"leader-tbody")]')).toBeVisible();

    for (let i = 0; i < tableCount; i++) {
        const item = tableRows.nth(i);
        const text = item.getByText(correctTableOrder[i]);
        await expect(text).toBeVisible();
    }
})