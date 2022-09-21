/// <reference types="cypress" />

import spok from 'cy-spok'

it('GET /api/board/1', () => {

  const body = {
    name: spok.type('string'),
    user: spok.type('number'),
    starred: spok.type('boolean'),
    created: spok.type('string'),
    id: spok.type('number')
  }

  cy.api({
    url: `/api/boards/1`
  }).then(spok({
    body
  }))

})