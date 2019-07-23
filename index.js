function webify (input) {
  const split = input.split('j')
  const result = `${split[0]}wc/join${split[1]}?pwd=`
  return result;
}

module.exports = webify

