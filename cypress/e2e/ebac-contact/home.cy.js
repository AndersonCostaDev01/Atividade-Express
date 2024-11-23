// <reference types="cypress" />

describe('Verificar pagina de Home', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/');
    })

    it('deve renderizar paginas', () => {
        cy.get('input').should('have.length', 3) // verifica se esta na pagina home utilizando os inputs disponibilizados na tela
    })
})