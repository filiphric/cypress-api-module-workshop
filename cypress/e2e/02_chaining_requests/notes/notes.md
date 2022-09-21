## Chaining requests

To pass data from one request to another we need to include all the data inside our Cypress command chain. There are multiple ways of doing that:
- using `.then()` - easiest, but can create pyramid of doom quickly
- using aliases - reference by `.get()` or by `this.alias`
- to avoid `.then()` functions completely, add your request to `beforeEach()` - you can have multiple `beforeEach()` functions and stack them up 

## Authorization
In our app, all requests that contain authorization will be paired to that user. To get the authorization token we will make request like this and alias the response body `accessToken`

```js
cy.api({
    method: 'POST',
    url: '/api/signup',
    body: {
      email: 'filip@example.com',
      password: 'Asdf.1234#'
    }
  }).its('body.accessToken').as('authorization')
```

To include this in our upcoming requests, we add the authorization into our headers section:

```js
const authorization = this.authorization
  
cy.api({
  method: 'POST',
  url: '/api/boards',
  headers: {
    authorization
  },
  body: { name: 'private board '}
})
  .its('body.id')
  .as('boardId')

```

When needed, we can stack up multiple requests in a `before()` or `beforeEach()` hook and access them via using `this.<alias>`. You can think of all these hook blocks as of the `arrange` in the **Arrange –> Act -> Assert** pattern.

## Useful reading
- [my blog on how variables work in Cypress](https://filiphric.com/cypress-basics-variables)
- [docs explaining variables and asynchronicity in Cypress](https://docs.cypress.io/guides/core-concepts/variables-and-aliases.html#Sharing-Context)
- [article on destructuring and how to use it](https://filiphric.com/using-destructuring-in-cypress)
- [article on the topic of "Arrange, Act, Assert" pattern](https://automationpanda.com/2020/07/07/arrange-act-assert-a-pattern-for-writing-good-tests/)