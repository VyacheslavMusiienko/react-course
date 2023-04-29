describe('about page', () => {
  beforeEach(() => {
    cy.visit('/about');
  });

  it('renders page content', () => {
    cy.contains('Lorem ipsum dolor');
  });
});
