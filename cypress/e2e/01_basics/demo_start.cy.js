/// <reference types="cypress" />


it('creating a board', () => {

  
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

it('filtering boards list', () => {

  cy.api({
    method: 'GET',
    url: '/api/boards'
  }).then( ({ status, body }) => {

    
  })
  
});

it('testing board list', () => {

  cy.api({
    method: 'GET',
    url: '/api/boards'
  }).then( ({ status, body }) => {

    // check attributes of items
    expect(body[0]).to.include.key('created')
    
    // check that there is a "starred" item
    expect(body[1].starred).to.be.true

  })
  
});

