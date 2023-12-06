describe('Тестирование сайта HuntingPony', function () {
   it('Оформление заказа', function () {
        cy.visit('https://huntingpony.com/');
        cy.get('[data-index="0"] > .header__collections-controls > .header__collections-link').click();
        cy.get('[data-product-id="338933151"] > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1').click();
        cy.wait(5000);
        cy.get('.add-cart-counter__btn').click();
        cy.get('[data-add-cart-counter-plus=""]').click();
        cy.get('.header__control-text').click();
        cy.get('.cart-controls > .button').click();
        cy.contains('Оформление заказа').should('be.visible');
    })
})