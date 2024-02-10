const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    supportFile: false,
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    reportFilename: 'cypress-report',
    overwrite: true,
    html: true,
    json: false,
    timestamp: 'yyyymmdd_HHMMss',
  },
});
