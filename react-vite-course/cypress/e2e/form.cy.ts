describe('form page', () => {
  beforeEach(() => {
    cy.visit('/form');
  });

  it('renders validation alert', () => {
    cy.get('form').submit();
    cy.contains('Please upload an image');
  });

  it('created a product card', () => {
    cy.get('input').eq(0).type('Nokia 3310');
    cy.get('input').eq(1).type('2020-04-05');
    cy.get('select').select('Nokia');
    cy.get('input').eq(2).click();
    cy.get('input').eq(4).selectFile('cypress/fixtures/nokia3310.jpg');
    cy.get('input').eq(5).click();
    cy.get('form').submit();
    cy.contains('Product card has been successfully created.');
  });
});
