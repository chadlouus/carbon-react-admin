
const nconf = require('nconf')
const config = nconf.env().get()

// const requiredParams = ['API_SERVER_URL']

// requiredParams.forEach((key) => {
//   if (!config[key]) {
//     console.error(`Required parameter is missing: ${key}`)
//     process.exit(1)
//   }
// })

module.exports = config
