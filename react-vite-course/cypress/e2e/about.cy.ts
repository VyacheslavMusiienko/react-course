describe('Check About page', () => {
    beforeEach(() => {
        cy.visit('/about');
    });
    it('open about page', () => {
        cy.contains('About');
    });
});
export {};
