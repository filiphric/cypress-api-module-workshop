/// <reference types="cypress" />

it('retreiving a board from database', () => {
  
});

it('creating a board', () => {

  
});

it('getting an error', () => {

  cy.api({
    method: 'POST',
    url: '/api/boards',
    failOnStatusCode: false
  })
  .its('status')
  .should('eq', 400)
  
});

it('filtering boards list with query', () => {

  cy.api({
    method: 'GET',
    url: '/api/boards'
  }).then( ({ status, body }) => {

    
  })
  
});
