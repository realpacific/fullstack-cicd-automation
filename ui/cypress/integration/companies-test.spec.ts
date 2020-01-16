context('Companies Test', () => {
  // @ts-ignore
  const API = Cypress.config('webApi');
  beforeEach(() => {
    cy.server();
    // Always call the reload api.
    cy.request(`${API}/companies/reload`);
    cy.route('GET', `${API}/companies`).as('get-companies');
    cy.route('DELETE', `${API}/companies/*`).as('del-companies');
    cy.route('POST', `${API}/companies`).as('add-companies');
    cy.visit('/');
  });

  it('when delete clicked, then should remove the row.', () => {
    cy.wait('@get-companies').then(() => {
      cy.get('tr').eq(1).should('contain', 'Microsoft');
      cy.get(':nth-child(2) > :nth-child(3) > button').click();
      cy.wait('@del-companies').then(() => {
        cy.get('tr').eq(1).should('not.contain', 'Microsoft');
      });
    });
  });

  it('when a company is added, then should show up at the last', () => {
    const companyName = 'Cypress';
    cy.wait('@get-companies');
    cy.get('tr').eq(1).should('contain', 'Microsoft');
    cy.get('.form-control').type(companyName, {delay: 100});
    cy.get('.input-group-append > .btn').click();
    cy.wait('@add-companies');
    cy.get('tr').eq(-1).should('contain', companyName);
  });
});
