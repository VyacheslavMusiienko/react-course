describe('Check Main page', () => {
    beforeEach(() => {
        cy.visit('/');
    });
    it('open main page and modal window', () => {
        cy.contains('Title: iPhone 9').click();
        cy.contains('Brand: Apple');
    });
    it('cards search ', () => {
        cy.get('input[type=text]').type('flying{enter}');
        cy.contains('Title: Flying Wooden Bird');
    });
    it('no cards found', () => {
        cy.get('input[type=text]').type('12345{enter}');
        cy.contains('No cards found');
    });
});
export {};
