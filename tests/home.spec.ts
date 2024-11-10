// tests/homepage.spec.ts

import { test, expect } from '@playwright/test';

test('subito.it homepage screenshot test', async ({ page }) => {
    // Go to subito.it homepage
    await page.goto('/');

    // Wait for the page to load
    await page.waitForLoadState('networkidle');

    // Take a full-page screenshot and compare it to the baseline
    await expect(page).toHaveScreenshot('subito-homepage.png', {
        fullPage: true,
    });
});
