#!/usr/bin/env node

const webify = require('../')

console.log('YOUR MEETING LINK IS: ' + webify(process.argv[2]))
