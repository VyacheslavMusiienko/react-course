describe('General routs test', () => {
    it('Should menu for pages', () => {
        cy.visit('/');
        cy.contains('About').click();
        cy.url().should('include', '/about');
        cy.contains('Form').click();
        cy.url().should('include', '/form');
    });

    it('Should redirect to 404 page', () => {
        cy.visit('/error');
        cy.get('h1').should('contain', 'Oops!');
    });
});
export {};
