// <reference types="cypress" />

describe('Verifica se deletou um contato', () => {
    beforeEach(() => {
      cy.visit('https://agenda-contatos-react.vercel.app/');
    });
  
    it('deve deletar um contato', () => {
      cy.intercept('DELETE', '/api/contatos/*').as('deleteRequest');
      cy.get(':nth-child(2) > .sc-gueYoa > .delete').click();
    });
  });
  