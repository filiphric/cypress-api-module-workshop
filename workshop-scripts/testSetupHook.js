const singleBoard = require('./fixtures/singleBoard.json')
const singleBoardSingleList = require('./fixtures/singleBoardSingleList.json')
const singleBoardSingleListThreeCards = require('./fixtures/singleBoardSingleListThreeCards.json')
const singleBoardTwoListsFiveCards = require('./fixtures/singleBoardTwoListsFiveCards.json')
const singleBoardTwoListsTwoCards = require('./fixtures/singleBoardTwoListsTwoCards.json')
const singleBoardSingleListThreeCardsSingleUser = require('./fixtures/singleBoardSingleListThreeCardsSingleUser.json')
const singleBoardSingleListThreeCardsTwoUsers = require('./fixtures/singleBoardSingleListThreeCardsTwoUsers.json')
const twoBoards = require('./fixtures/twoBoards.json')
const threeBoards = require('./fixtures/threeBoards.json')
const empty = require('./fixtures/empty.json')

const beforeTestSeeds = {
}

const beforeEachTestSeeds = {
  'cypress/e2e/01_API_testing basics/demo_end.cy.js': threeBoards
}

before( () => {
  
  const path = Cypress.platform.includes('win') ? Cypress.spec.relative.replaceAll('\\', '/') : Cypress.spec.relative

  const dbState = beforeTestSeeds[`${path}`]
  
  if (dbState) {
    cy.task('testSetupData', dbState, { log: false })
    cy.info('💡 Database was wiped and seeded before all tests', dbState)
  }

})

beforeEach( () => {
  
  const path = Cypress.platform.includes('win') ? Cypress.spec.relative.replaceAll('\\', '/') : Cypress.spec.relative

  const dbState = beforeEachTestSeeds[`${path}`]

  if (dbState) {
    cy.task('testSetupData', dbState, { log: false })
    cy.info('💡 Database was wiped and seeded before each test', dbState)
  }

})