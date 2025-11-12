describe('Counter App', () => {
  it('increments and decrements counter', () => {
    cy.visit('http://localhost:3000');
    cy.get('button').contains('Increment').click();
    cy.get('[data-testid="count"]').should('have.text', '1');
    cy.get('button').contains('Decrement').click();
    cy.get('[data-testid="count"]').should('have.text', '0');
  });
});