context('Chat Test', () => {
  beforeEach(() => {
    cy.visit('/chat');
  });

  it('When pressed enter, should send message.', () => {
    const messages = ['Hi', 'How are you?', 'I am good too.'];

    messages.forEach(m => {
      cy.get(' .form-control').eq(0).clear().type(m, {delay: 20});
      cy.get(' .form-control').type('{enter}');
      cy.get(' .form-control').clear();
      cy.wait(1000);
      cy.get('.justify-content-end > .card > .card-text').last().should('contain', m);
    });
  });
});
