/// <reference types="cypress" />

before(() => {
  cy.api({
    method: 'POST',
    url: '/api/signup',
    body: {
      email: 'filip@example.com',
      password: 'Asdf.1234#'
    }
  }).its('body.accessToken').as('authorization')
});

before('creates board as a logged in user', function() {

  const authorization = this.authorization
  
  cy.api({
    method: 'POST',
    url: '/api/boards',
    headers: {
      authorization
    },
    body: { name: 'private board '}
  })
    .its('body.id')
    .as('boardId')
  
});

it('grants access to private board only to authorized user', function() {

  const authorization = this.authorization
  const boardId = this.boardId

  cy.api({
    method: 'GET',
    url: `/api/boards/${boardId}`,
    failOnStatusCode: false
  }, 'unauthorized').its('status').should('eq', 403)

  cy.api({
    method: 'GET',
    url: `/api/boards/${boardId}`,
    headers: {
      authorization
    }
  }, 'authorized').its('status').should('eq', 200)
  
});