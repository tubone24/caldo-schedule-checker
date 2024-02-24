import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 720,
  viewportHeight: 2000,
  screenshotsFolder: "./cypress/snapshots/actual",
  trashAssetsBeforeRuns: true,
  chromeWebSecurity: false,
  video: true,
  videoCompression: 15,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
