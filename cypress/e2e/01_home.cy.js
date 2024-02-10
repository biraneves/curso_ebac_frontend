/// <reference types="cypress" />

describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/');
  });

  it('Should show 3 input fields', () => {
    cy.get('input').should('have.length', 3);
  });

  it('should show 3 default contacts', async () => {
    await cy.get('.sc-beqWaB.eQdhbg.contato').should('have.length', 3);
  });
});
