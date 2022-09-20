/// <reference types="cypress" />

it.only('creating a board', () => {

  
});

it('getting an error', () => {

  cy.api({
    method: 'POST',
    url: '/api/boards',
    failOnStatusCode: false
  }, 'create board')
  .its('status')
  .should('eq', 400)
  
});

it('testing board list', () => {

  cy.api({
    method: 'GET',
    url: '/api/boards',
    headers: {
      accept: 'application/json'
    }
  }).then( ({ status, body }) => {

    // check status

    // check length

    // check attributes of all items

    // check that there is a "starred" item

  })
  
});

it('filtering boards list', () => {

  cy.api({
    method: 'GET',
    url: '/api/boards',
    headers: {
      accept: 'application/json'
    }
  }).then( ({ status, body }) => {

    
  })
  
});