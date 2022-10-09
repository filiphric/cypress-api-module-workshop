/// <reference types="cypress" />
import '../../workshop-scripts/testSetupHook'
import '../../workshop-scripts/infoCommand'
import 'cypress-plugin-api'
chai.use(require('chai-json-schema'));

Cypress.Commands.overwrite('request', (orig, ...args) => {

  if (typeof args[0] === 'object') {
    args[0].headers = {
      accept: 'application/json',
      ...args[0].headers
    }
  }
  return orig(...args)
})