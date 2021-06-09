/// <reference types="cypress" />

import { config } from 'dotenv';
config({ path: '.env.local' });

module.exports = (_: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) => {
  config.env.TEST_USER_EMAIL = process.env.TEST_USER_EMAIL;
  config.env.TEST_USER_PASSWORD = process.env.TEST_USER_PASSWORD;

  return config;
};
