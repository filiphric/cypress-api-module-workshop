/// <reference types="cypress" />

import boardSchema from '../../fixtures/boardSchema.json'

it('GET /api/board/1', () => {

  cy.api({
    url: `/api/boards/1`
  }).its('body')
  .should('jsonSchema', boardSchema)
  
})