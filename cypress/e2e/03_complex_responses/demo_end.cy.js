/// <reference types="cypress" />

import spok from 'cy-spok'

it('GET /api/cards', function() {

  cy.api({
    url: `/api/cards/1`
  }).then(spok({
    status: 200,
    body: {
      completed: false,
      description: ''
    }
  }))
  
})