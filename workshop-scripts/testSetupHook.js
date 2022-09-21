const path = require('path');
const singleBoardSingleListSingleCard = require('./fixtures/singleBoardSingleListSingleCard.json')
const singleBoardTwoListsFiveCards = require('./fixtures/singleBoardTwoListsFiveCards.json')
const threeBoards = require('./fixtures/threeBoards.json')
const empty = require('./fixtures/empty.json')

const beforeTestSeeds = {
  'cypress/e2e/02_chaining_requests/demo_start.cy.js': empty,
  'cypress/e2e/02_chaining_requests/demo_end.cy.js': empty,
  'cypress/e2e/02_chaining_requests/challenge_solution.cy.js': empty,
}

const beforeEachTestSeeds = {
  'cypress/e2e/01_basics/demo_end.cy.js': threeBoards,
  'cypress/e2e/01_basics/demo_start.cy.js': threeBoards,
  'cypress/e2e/01_basics/challenge.cy.js': singleBoardTwoListsFiveCards,
  'cypress/e2e/01_basics/challenge_solution.cy.js': singleBoardTwoListsFiveCards,
  'cypress/e2e/03_complex_responses/demo_end.cy.js': singleBoardSingleListSingleCard,
  'cypress/e2e/03_complex_responses/demo_start.cy.js': singleBoardSingleListSingleCard,
  'cypress/e2e/03_complex_responses/challenge.cy.js': singleBoardSingleListSingleCard,
  'cypress/e2e/03_complex_responses/challenge_solution.cy.js': singleBoardSingleListSingleCard
}

const testPath = path.normalize(Cypress.spec.relative)

before( () => {

  const dbState = beforeTestSeeds[`${testPath}`]
  
  if (dbState) {
    cy.task('testSetupData', dbState, { log: false })
    cy.info('💡 Database was wiped and seeded before all tests', dbState)
  }

})

beforeEach( () => {
  
  const dbState = beforeEachTestSeeds[`${testPath}`]

  if (dbState) {
    cy.task('testSetupData', dbState, { log: false })
    cy.info('💡 Database was wiped and seeded before each test', dbState)
  }

})