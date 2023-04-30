describe('Check Form page', () => {
    beforeEach(() => {
        cy.visit('/form');
    });
    it('open form page', () => {
        cy.contains('Form');
    });
    it('error message in form', () => {
        cy.get('button[type=submit]').click();
        cy.contains('Required field');
    });
    it('add user', () => {
        cy.get('input[name="name"]').type('Test');
        cy.get('input[name="surname"]').type('Test');
        cy.get('input[name="birthday"]').type('1990-01-01');
        cy.get('input[name="picture"]').selectFile('./src/assets/scrin.jpg');
        cy.get('[type="radio"]').first().check();
        cy.get('[type="checkbox"]').check();
        cy.get('[id="country"]').select('Ukraine');
        cy.get('button[type=submit]').click();
        cy.contains('Test Test');
    });
});
export {};
