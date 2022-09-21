/// <reference types="cypress" />

import spok from 'cy-spok'

it('GET /api/cards', function() {

  const body = {
    completed: false,
    description: '',
    created: spok.startsWith('2022'),
    deadline: spok.test(/\d{4}-\d{2}-\d{2}/),
    id: spok.type('number')
  }

  cy.api({
    url: `/api/cards/1`
  }).then(spok({
    status: 200,
    body
  }))
})