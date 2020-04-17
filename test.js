const test = require('tape')
const zoom = require('./')

test('normal link', (t) => {
  const normal = 'https://adomain.zoom.us/j/11122223334444555'
  const expected = 'https://adomain.zoom.us/wc/join/11122223334444555'
  const output = zoom(normal)
  t.equals(expected.indexOf(output), 0, 'the link begins the same way')
  t.end()
})

test('passworded link', (t) => {
  const input = 'https://anorg.zoom.us/j/1111222233334444?pwd=aBcD1234567890gJzF'
  const expected = 'https://anorg.zoom.us/wc/join/1111222233334444?pwd=aBcD1234567890gJzF'
  const output = zoom(input)
  t.equals(output, expected, 'generated the expected link')
  t.end()
})

