const path = require('path');
const singleBoard = require('./fixtures/singleBoard.json')
const singleBoardSingleList = require('./fixtures/singleBoardSingleList.json')
const singleBoardSingleListThreeCards = require('./fixtures/singleBoardSingleListThreeCards.json')
const singleBoardTwoListsFiveCards = require('./fixtures/singleBoardTwoListsFiveCards.json')
const singleBoardSingleListThreeCardsSingleUser = require('./fixtures/singleBoardSingleListThreeCardsSingleUser.json')
const singleBoardSingleListThreeCardsTwoUsers = require('./fixtures/singleBoardSingleListThreeCardsTwoUsers.json')
const threeBoards = require('./fixtures/threeBoards.json')
const empty = require('./fixtures/empty.json')

const beforeTestSeeds = {
}

const beforeEachTestSeeds = {
  'cypress/e2e/01_basics/demo_end.cy.js': threeBoards,
  'cypress/e2e/01_basics/demo_start.cy.js': threeBoards,
  'cypress/e2e/01_basics/challenge.cy.js': singleBoardTwoListsFiveCards,
  'cypress/e2e/01_basics/challenge_solution.cy.js': singleBoardTwoListsFiveCards
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