import { resolveOptions } from './resolveOptions';

Cypress.Commands.overwrite('request', (orig, ...args) => {

  let options = resolveOptions(...args)

  options.headers = {
    accept: 'application/json',
    ...options.headers
  }

  return orig(options)
})