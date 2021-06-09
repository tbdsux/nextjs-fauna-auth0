// based from: https://github.com/auth0/nextjs-auth0/blob/main/cypress/integration/smoke.test.ts

const EMAIL = Cypress.env('TEST_USER_EMAIL');
const PASSWORD = Cypress.env('TEST_USER_PASSWORD');

if (!EMAIL || !PASSWORD) {
  throw new Error(
    'You must provide CYPRESS_USER_EMAIL and CYPRESS_USER_PASSWORD environment variables'
  );
}

describe('Authentication', () => {
  before(() => {
    cy.visit('/');

    cy.get('[data-testid=btn-login]').click();

    cy.get('input[name=email], input[name=username]').focus().clear().type(EMAIL);
    cy.get('input[name=password]').focus().clear().type(PASSWORD);
    cy.get('button[name=submit], button[name=action]').click();
  });

  it('should hide login button and show logout button', () => {
    cy.get('[data-testid=btn-logout]').should('exist');
    cy.get('[data-testid=btn-login]').should('not.exist');
  });
});
