describe('not found page', () => {
  beforeEach(() => {
    cy.visit('/not-found');
  });

  it('renders error alert', () => {
    cy.contains('Error 404');
  });
});
