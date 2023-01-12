/// <reference types="cypress" />
const perfil = require('../fixtures/perfil.json')


context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('minha conta')

    });

    it.only('Teste e2e Fluxo de pedido', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('#primary-menu > .menu-item-629 > a').click()


        cy.addProdutos('Ajax Full-Zip Sweatshirt', 'M', 'Red', 1)
        cy.addProdutos('Abominable Hoodie', 'M', 'Blue', 1)
        cy.addProdutos('Atlas Fitness Tank', 'M', 'Blue', 2)
        cy.addProdutos('Arcadio Gym Short', '34', 'Black', 1)

        cy.get('#cart > .dropdown-toggle').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .view-cart').click()
        cy.get('.checkout-button').click()

        cy.get('#order_comments').type('Otimos produtos')
        cy.get('#terms').click()
        cy.get('#place_order').click()


    });


});


