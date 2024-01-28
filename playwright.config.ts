import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    testDir: './e2e',
    projects: [
        {
            name: 'Chromium',
            use: { browserName: 'chromium' },
        },
        {
            name: 'Firefox',
            use: { browserName: 'firefox' },
        }
    ],
};

export default config;