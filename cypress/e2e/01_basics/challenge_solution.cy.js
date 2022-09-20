// ⚠️ Database is seeded before each test. To take a look into what is going to be seeded

// challenge #1: Write a simple test to create a board check that the status code is correct
it('creates a board', () => {

  cy.api({
    method: 'POST',
    url: '/api/boards',
    body: {
      name: 'new board'
    }
  }, 'create a board')
  .its('status')
  .should('eq', 201)
  
});

// challenge #2: write a test for error status code. create a new card without providing boardId and listId. assert the error message
it('gets 400 when creating a card', () => {

  cy.api({
    method: 'POST',
    url: '/api/cards',
    body: {
      name: 'new card'
    },
    failOnStatusCode: false
  }, 'create a card')
  .its('body.error')
  .should('eq', "You need to provide 'boardId' and 'listId' in request body.")
  
});

// challenge #3: GET all the cards in list with id 1, use a query for that
it('gets all cards in list 1', () => {

  cy.api({
    method: 'GET',
    url: '/api/cards',
    qs: {
      listId: 1
    }
  }, 'get all card from list 1')
  .its('body')
  .should('have.length', 3)

  
})

// challenge #4: GET all the cards from database and then assert there are 3 completed cards
it('gets all cards and test the completed ones', () => {

  cy.api({
    method: 'GET',
    url: '/api/cards'
  }, 'get all cards')
  .then( ({ body }) => {

    const { filter } = Cypress._

    const completedCards = filter(body, { completed: true })
    expect(completedCards).to.have.length(3)

  })

})