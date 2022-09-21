## Testing API agains JSON schemas

Schemas are useful tools for a quick validation of the API response. They can either be a part of documentation, or can be easily generated from an example response, e.g. by [schema generators](https://www.liquid-technologies.com/online-json-to-schema-converter)

Cypress does not hav a built in schema validator, but there is one for chai library, that is bundled in Cypress. To add to the existing chai assertions, simply add the installed library extenstion into your `cypress/support/e2e.js` file:

```js
chai.use(require('chai-json-schema'));
```

This will add `jsonSchema` assertion that can be used with our `.should()` command:

```js
cy.api({
    method: 'GET',
    url: '/api/cards/1'
  }).its('body')
    .should('jsonSchema', cardSchema)
```

## Useful reading
- [chai-json schema plugin](https://www.chaijs.com/plugins/chai-json-schema/)
- [example repo on adding custom chai assertions](https://github.com/cypress-io/cypress-example-recipes/tree/master/examples/extending-cypress__chai-assertions)
- [JSON schema generator](https://www.liquid-technologies.com/online-json-to-schema-converter)