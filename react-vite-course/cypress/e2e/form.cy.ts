describe('Check Form page', () => {
    beforeEach(() => {
        cy.visit('/form');
    });
    it('open about page', () => {
        cy.contains('About');
    });
});
export {};
