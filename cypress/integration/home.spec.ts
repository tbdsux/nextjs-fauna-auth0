describe('Index', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display app text', () => {
    cy.get('h3').contains('NextJS, FaunaDB w/ Auth0');
  });
});
