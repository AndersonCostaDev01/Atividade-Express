// <reference types="cypress" />

describe('Verificar a inclusão de um contato', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/');
    });

    it('deve incluir um contato', () => {
        cy.get('[type="text"]').type('Anderson');
        cy.get('[type="email"]').type('mHb4d@example.com');
        cy.get('[type="tel"]').type('11999999999');
        cy.get('.adicionar').click();
        cy.get('.sc-iAEyYk > :nth-child(5)').should('contain', 'Anderson');
    })
})