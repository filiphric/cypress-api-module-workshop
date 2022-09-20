## Testing API
- most basic way of checking API using `.its()` command
```js
cy.api({
  method: 'GET',
  url: '/api/boards'
  })
  .its('status')
  .should('eq', 201)
```

- more detailed checking of response body
```js
cy.request('/todos')
  .then( (todos) => {
    expect(todos.status).to.eq(200)
    expect(todos.body).to.have.length(3)
    expect(todos.body[0].id).to.be.a('number')
    expect(todos.body[0].text).to.eq('buy milk')
  })
```
- using `.then()` makes more sense than `.should()`, because in case of http requests, `.should()`will not make previous command retry

## Destructuring
- pick just the parts of the response object you are interested in:
```js

cy.request('/todos')
  .then( ({status, body}) => {
    expect(status).to.eq(200)
    expect(body).to.have.length(3)
    expect(body[0].id).to.be.a('number')
    expect(body[0].text).to.eq('buy milk')
  })
```

## Filtering and negative testing
- `qs` - adding queries and filter data (your API needs to support this)
- `failOnStatusCode` attribute will not make a test fail on non 2xx status code
- `retryOnStatusCodeFailure` will retry if response does not return a success status code

## Useful reading
* [docs for .request() command](https://docs.cypress.io/api/commands/request.html#Syntax)
* [article on why it is useful to skip UI and use API instead](https://code.kiwi.com/skip-the-ui-using-api-calls-d358b9b61b91)
* [article on API testing in Cypress](https://filiphric.com/cypress-basics-api-testing)
* [article on how to handle data from response](https://filiphric.com/working-with-api-response-data-in-cypress)
* [my article on destructuring](https://filiphric.com/using-destructuring-in-cypress) 
