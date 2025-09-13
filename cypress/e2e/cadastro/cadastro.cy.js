/// <reference types="cypress"/>

describe('Teste Funcional do Login', () => {
    it('Tem que logar com sucesso', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.wait(1000) // Pausa por 1 segundo

        cy.get('[data-test="username"]').type("standard_user")
        cy.wait(1000)

        cy.get('[data-test="password"]').type("secret_sauce")
        cy.wait(1000)

        cy.get('[data-test="login-button"]').click()
        cy.get('.title').should('contain','Products')
        cy.wait(1000)

        // leva pro logout
        cy.get('#react-burger-menu-btn').click()
        cy.wait(1000)
        cy.get('#logout_sidebar_link').click()
        cy.get('[data-test="login-button"]').should('be.visible')
    });
});