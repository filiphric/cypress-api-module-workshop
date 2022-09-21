/// <reference types="cypress" />

// #1: create a new board using API in the beforeEach and add an alias to it 
beforeEach(() => {
  cy.api({
    method: 'POST', 
    url: '/api/boards', 
    body: { 
      name: 'board 1' 
    }
  }).as('board')
});

// #2: create a new list using API
// #3: move the creation of the new list to a beforeEach hook
beforeEach('creates a new list', function() {

  cy.api({
    method: 'POST', 
    url: '/api/lists', 
    body: {
      name: 'list 1',
      boardId: this.board.body.id
    }
  }).as('list')
  
});

// #3: create a new card
it('creates a new card', function() {

  cy.api({
    method: 'POST',
    url: '/api/cards',
    body: {
      name: 'card 1',
      boardId: this.board.body.id,
      listId: this.list.body.id
    }
  })

})

// #4: create a new card and complete it
it('creates a new card and marks it as completed', function() {

  cy.api({
    method: 'POST', 
    url: '/api/cards', 
    body: {
      name: 'card 2',
      boardId: this.board.body.id,
      listId: this.list.body.id
    }
  }).then( ({ body: { id } }) => {
    cy.api({
      method: 'PATCH', 
      url: `/api/cards/${id}`, 
      body: {
        completed: true
      }
    })
  }) 

})