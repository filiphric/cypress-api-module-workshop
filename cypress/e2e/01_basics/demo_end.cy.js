/// <reference types="cypress" />

it('creating a board', () => {

  cy.api({
    method: 'POST',
    url: '/api/boards',
    body: {
      name: 'new board'
    }
  }, 'create board')
  .its('status')
  .should('eq', 201)
  
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
    url: '/api/boards',
    qs: {
      starred: true
    }
  }, 'get all starred boards').then( ({ status, body }) => {

    expect(status).to.eq(200)
    expect(body).to.have.length(1)

  })
  
});

it('testing board list', () => {

  const { filter } = Cypress._

  cy.api({
    method: 'GET',
    url: '/api/boards'
  }, 'get boards list').then( ({ status, body }) => {

    // check attributes of all items
    const requiredKeys = ['name', 'user', 'starred', 'created', 'id']
    body.forEach( item => {
      expect(item).to.have.keys(requiredKeys)
    })
    
    // check that there is a "starred" item
    const starredItems = filter(body, { starred: true })
    expect(starredItems).to.have.length(1)
    
  })
  
});

