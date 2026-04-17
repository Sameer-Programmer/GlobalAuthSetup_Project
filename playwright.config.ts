import { defineConfig, devices } from "@playwright/test";
export default defineConfig({
  testDir: "./tests",
  timeout: 30_000,
  fullyParallel: true,
  retries: 1,
  workers: 2,
  reporter: "html",
  use: {
    headless: true,
    screenshot: "only-on-failure",
    video: "on-first-retry",
    trace: "on-first-retry",
  },
  projects: [
    {
    // setup 
    name :'setup',
    testMatch: 'tests/auth.setup.ts', // //------/.*auth\.setup\.ts/
    },

    {
      name: "chromium",
      dependencies:['setup'],
      use: {
        storageState :'tests/storage.json', //global
        // ...devices["Desktop Chrome"],
         //channel : 'chrome',
         viewport :null,
         launchOptions:{
          args:['--start-maximized']
         }
         },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
});


