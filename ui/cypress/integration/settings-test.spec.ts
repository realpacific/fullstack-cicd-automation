context('Settings Test', () => {
  // @ts-ignore
  const API = Cypress.config('webApi');
  beforeEach(() => {
    cy.server();
    cy.visit('/settings');
  });

  it('When username is changed, then welcome message should also change', () => {
    const newUser = 'Test';
    cy.get(' .form-control').eq(0).clear().type(newUser, {delay: 100});
    cy.get('.navbar-brand').contains(newUser);
  });

  it('When checkbox is clicked, then Toggle FullScreen should be hidden', () => {

    cy.get('.navbar button').contains('Toggle Full screen').first().should('be.visible');
    cy.get('.form-check-input').click();
    cy.get('.navbar button').should('not.exist');
  });
});
