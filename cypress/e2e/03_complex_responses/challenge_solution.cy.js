/// <reference types="cypress" />
import spok from 'cy-spok'

// #1: fill these tests some assertions using cy-spok plugin
it('POST /api/boards', function() {

  cy.api({
    method: 'POST',
    url: '/api/boards',
    body: {
      name: 'new board'
    }
  }).then(spok({
    status: 201,
    body: {
      starred: false,
      name: 'new board',
      id: spok.number,
      created: spok.string,
      user: 0
    }
  }))

})

it('GET /api/boards?starred=true', function() {

  cy.api({
    method: 'GET',
    url: '/api/boards',
    qs: {
      starred: true
    },
    headers: {
      accept: 'application/json'
    }
  }).then(spok({
    status: 200,
    body: []
  }))

})

it('POST /api/lists', function() {

  cy.api({
    method: 'POST',
    url: '/api/lists',
    body: {
      name: 'new list',
      boardId: 1
    }
  }).then(spok({
    status: 201,
    body: {
      id: spok.number,
      boardId: spok.number,
      created: spok.string,
      name: 'new list'
    }
  }))

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
  }).then(spok({
    status: 201,
    body: {
      name: 'new list',
      boardId: spok.number,
      listId: spok.number,
      id: spok.number,
      created: spok.string,
      deadline: spok.string,
      description: '',
      completed: false
    }
  }))

})