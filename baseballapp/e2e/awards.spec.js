import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000/');
});

test('Find all three winner headers', async ({page}) => {

    await expect(page.locator('//h1[contains(text(),"MVP Award Winners")]')).toBeVisible();

    await expect(page.locator('//h1[contains(text(),"Cy Young Award Winners")]')).toBeVisible();

    await expect(page.locator('//h1[contains(text(),"Rookie of the Year Award Winners")]')).toBeVisible();
});

test('Click on first dropdown and confirm table exists', async ({page}) => {

    await page.locator('//div[contains(@class, "collapse-header")]').first().click();

    await expect(page.locator('//table[contains(@class,"award-table")]')).toBeVisible();
    
});

test('Confirm dropdown can be closed', async ({page}) => {

    const firstDropdown = await page.locator('//div[contains(@class, "collapse-header")]').first();

    const table = await page.locator('//table[contains(@class,"award-table")]')

    await firstDropdown.click();

    await expect(table).toBeVisible();

    await firstDropdown.click();

    await expect(table).toHaveCount(0);
    
});

test('Confirm Ohtani is first dropdown with correct data', async ({page}) => {

    const firstDropdown = await page.locator('//div[contains(@class, "collapse-header")]').first();

    await expect(page.locator('//span[contains(text(), "Shohei Ohtani - Los Angeles Dodgers")]')).toBeVisible();

    await firstDropdown.click();

    await expect(page.locator('//td[contains(text(), "9.1")]')).toBeVisible();
});