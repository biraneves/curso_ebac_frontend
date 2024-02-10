/// <reference types="cypress" />

describe('Functionalities', () => {
  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/');
  });

  it('Should create a contact', () => {
    cy.get('input[type="text"]').type('John Doe');
    cy.get('input[type="email"]').type('john.doe@email.com');
    cy.get('input[type="tel"]').type('555-1234');
    cy.get('.adicionar').click();
    cy.screenshot('create-contact');

    cy.get('.sc-beqWaB.eQdhbg.contato').should('have.length', 4);
  });

  it('Should update a contact', () => {
    cy.get(':nth-child(2) > .sc-gueYoa > .edit').click();
    cy.get('[type="text"]').type('{home}{del}G');
    cy.get('.alterar').click();
    cy.screenshot('update-contact');

    cy.contains('li', 'Gian Souza').should('exist');
  });

  it('Should delete a contact', () => {
    cy.get(':nth-child(5) > .sc-gueYoa > .delete').click();
    cy.screenshot('delete-contact');

    cy.get('.sc-beqWaB.eQdhbg.contato').should('have.length', 3);
  });
});
