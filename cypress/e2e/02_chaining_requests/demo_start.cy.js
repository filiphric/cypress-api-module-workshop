/// <reference types="cypress" />

before(() => {
  cy.api({
    method: 'POST',
    url: '/api/signup',
    body: {
      email,
      password
    }
  })
  
});

it('creates board as a logged in user', function() {

  // create private board

  // check private board is available with authorization

  // check private board is hidden available without authorization

});