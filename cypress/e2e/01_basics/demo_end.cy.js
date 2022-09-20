/// <reference types="cypress" />

it.only('testing board list', () => {

  cy.api({
    method: 'GET',
    url: '/api/boards',
    headers: {
      accept: 'application/json'
    }
  }).then( ({status, body}) => {

    expect(status).to.eq(200)
    expect(body).to.have.length(2)
    expect(body[0].id).to.be.a('number')
    expect(body[0].starred).to.be.false
    expect(body[0].user).to.eq(0)

  })
  
});

it('filtering boards list', () => {

  cy.api({
    method: 'GET',
    url: '/api/boards',
    qs: {
      starred: true
    },
    headers: {
      accept: 'application/json'
    }
  }).then( ({status, body}) => {

    expect(status).to.eq(200)
    expect(body).to.have.length(0)

  })
  
});
