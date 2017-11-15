
const file = JSON.parse(Buffer.from(require('fs').readFileSync('./prog', 'utf8'), 'base64').toString('utf8'))


console.dir(file, { depth: 10, colors: true })
