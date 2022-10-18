const { _ } = Cypress

export const methods = [
  'GET',
  'POST',
  'PUT',
  'HEAD',
  'DELETE',
  'OPTIONS',
  'TRACE',
  'COPY',
  'LOCK',
  'MKCOL',
  'MOVE',
  'PURGE',
  'PROPFIND',
  'PROPPATCH',
  'UNLOCK',
  'REPORT',
  'MKACTIVITY',
  'CHECKOUT',
  'MERGE',
  'M-SEARCH',
  'NOTIFY',
  'SUBSCRIBE',
  'UNSUBSCRIBE',
  'PATCH',
  'SEARCH',
  'CONNECT'
]

export const validateMethod = (str) => {
  return _.isString(str) && _.includes(methods, str.toUpperCase())
}