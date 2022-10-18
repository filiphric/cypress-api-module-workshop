import { validateMethod } from './validateMethod';
const { _ } = Cypress

export const resolveOptions = (...args) => {

  const options = {}

  if (_.isObject(args[0])) {
    _.extend(options, args[0])
  } else if (args.length === 1) {
    options.url = args[0]
  } else if (args.length === 2) {
    if (validateMethod(args[0])) {
      options.method = args[0]
      options.url = args[1]
    } else {
      options.url = args[0]
      options.body = args[1]
    }
  } else if (args.length === 3) {
    options.method = args[0]
    options.url = args[1]
    options.body = args[2]
  }

  return options

}