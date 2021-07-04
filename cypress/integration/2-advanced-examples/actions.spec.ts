/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://localhost:4200')
  })

  it('.type{} - test out navigation in our application',()=>{
    cy.get('.login').click();
  })

  cy.contains('algo');

})
