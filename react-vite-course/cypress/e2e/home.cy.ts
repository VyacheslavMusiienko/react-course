describe('home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('renders 10 random cards', () => {
    cy.get('img').should('have.length', 10);
  });

  it('renders modal', () => {
    cy.get('img').eq(0).click();
    cy.contains('Download');
  });

  it('renders alert after bad request', () => {
    cy.get('input').type('dsfhjsdhfsjdhfhjsdgf');
    cy.get('form').submit();
    cy.contains('Nothing found for your request. Please try again...');
  });
});
