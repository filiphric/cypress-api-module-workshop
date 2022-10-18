## Simple test
- most basic way of checking API using `.its()` command
```js
cy.api({
    method: 'GET',
    url: '/api/boards'
  })
  .its('status')
  .should('eq', 201)
```

## Testing errors
If `cy.request()` gets non `2xx` status code, it will make the test fail. To change this behavior an option can be set:

```
failOnStatusCode: false
```

## Testing queries
- similarly to `cy.visit()` command, we can define queries using `qs` object:
```js
cy.api({
    method: 'GET',
    url: '/api/boards',
    qs: {
      starred: true
    }
  })
```

## Destructuring
- pick just the parts of the response object you are interested in:
```js

cy.request('/api/boards')
  .then( ({ status, body }) => {
    expect(status).to.eq(200)
    expect(body).to.have.length(3)
  })
```

## Useful reading
* [docs for .request() command](https://docs.cypress.io/api/commands/request.html#Syntax)
* [article on why it is useful to skip UI and use API instead](https://code.kiwi.com/skip-the-ui-using-api-calls-d358b9b61b91)
* [article on API testing in Cypress](https://filiphric.com/cypress-basics-api-testing)
* [article on how to handle data from response](https://filiphric.com/working-with-api-response-data-in-cypress)
* [my article on destructuring](https://filiphric.com/using-destructuring-in-cypress) 
