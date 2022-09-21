/// <reference types="cypress" />

it('POST /api/boards', function() {

  cy.api({
    method: 'POST',
    url: '/api/boards',
    body: {
      name: 'new board'
    }
  })

})

it('GET /api/boards?starred=true', function() {

  cy.api({
    method: 'GET',
    url: '/api/boards',
    qs: {
      starred: true
    }
  })

})

it('POST /api/lists', function() {

  cy.api({
    method: 'POST',
    url: '/api/lists',
    body: {
      name: 'new list',
      boardId: 1
    }
  })

})

it('POST /api/cards', function() {

  cy.api({
    method: 'POST',
    url: '/api/cards',
    body: {
      name: 'new list',
      boardId: 1,
      listId: 1
    }
  })

})