/// <reference types="cypress" />

it('retreiving a board from database', () => {

  cy.api('/boards/1')
  
});

it('creating a board', () => {

  cy.api({
    method: 'POST',
    url: '/api/boards',
    body: {
      name: 'new board'
    }
  })
  .its('status')
  .should('eq', 201)
  
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

it('filtering boards list', () => {

  cy.api({
    method: 'GET',
    url: '/api/boards',
    qs: {
      starred: true
    }
  }).then( ({ status, body }) => {

    expect(status).to.eq(200)
    expect(body).to.have.length(1)

  })
  
});
