import process from 'node:process';
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: 'list',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
  },
  webServer: {
    command: 'bun --filter=@repo/lomoweb run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
});
