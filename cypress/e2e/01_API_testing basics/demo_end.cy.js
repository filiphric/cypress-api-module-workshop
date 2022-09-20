/// <reference types="cypress" />

it.only('creating a board', () => {

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

it.only('testing board list', () => {

  const { filter } = Cypress._

  cy.api({
    method: 'GET',
    url: '/api/boards',
    headers: {
      accept: 'application/json'
    }
  }, 'get boards list').then( ({ status, body }) => {

    // check status
    expect(status).to.eq(200)
    // check length
    expect(body).to.have.length(3)
    
    // check attributes of all items
    const requiredKeys = ['name', 'user', 'starred', 'created', 'id']
    body.forEach( item => {
      expect(item).to.include.keys(requiredKeys)
    })
    
    // check that there is a "starred" item
    const starredItems = filter(body, { starred: true })
    expect(starredItems).to.have.length(1)
    
  })
  
});

it('filtering boards list', () => {

  cy.api({
    method: 'GET',
    url: '/api/boards',
    qs: {
      starred: true
    },
    headers: {
      accept: 'application/json'
    }
  }, 'get all starred boards').then( ({status, body}) => {

    expect(status).to.eq(200)
    expect(body).to.have.length(1)

  })
  
});