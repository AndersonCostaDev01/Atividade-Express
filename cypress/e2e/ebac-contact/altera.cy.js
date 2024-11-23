// <reference types="cypress" />

describe('ebac-contact', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/');
    });

    it('Verifica a auteração do contato', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click();
        cy.get('[type="text"]').clear().type('Marcos');
        cy.get('.alterar').click();
        cy.get('.sc-iAEyYk > :nth-child(2)').should('contain', 'Marcos');
    })
})