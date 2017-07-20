const fs = require('fs')
const postcssNormalize = require('postcss-normalize')

const result = postcssNormalize.process(fs.readFileSync('source.css', 'utf8'))
fs.writeFileSync('result.css', result)
