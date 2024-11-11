import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    timeout: 30 * 1000,
    expect: {
        timeout: 5000,
        toHaveScreenshot: {
            threshold: 0.2, // Adjust threshold as needed
        },
    },
    use: {
        baseURL: 'https://www.google.com',
        headless: true,
    },
    webServer: {
        command: 'npm run dev',
        port: 3000,
        reuseExistingServer: !process.env.CI,
    },
    outputDir: 'playwright-report/',
});
