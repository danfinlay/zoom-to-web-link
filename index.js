const URL = require('url')

function webify (input) {
  const url = URL.parse(input)
  const origin = url.origin

  const pathname = url.path
  const paths = pathname.split('/').filter(a => a !== '')
  console.log(paths)

  const prefix = url.origin || `${url.protocol}//${url.host}`
  const result = `${prefix}/wc/join/${paths[1]}`

  return result
}

module.exports = webify
