const functions = require('firebase-functions')

const { Nuxt } = require('nuxt-start')

const nuxtConfig = require('./nuxt.config.js')

const config = {
  ...nuxtConfig,
  dev: false,
  debug: true,
  buildDir: 'nuxt',
}
const nuxt = new Nuxt(config)

exports.ssrapp = functions.https.onRequest(async (req, res) => {
  await nuxt.ready()
  nuxt.render(req, res)
})

exports.VESApi = functions.https.onRequest(async (req, res) => {
  const plate = req.query.plateNumber

  res.send()
  // var axios = require('axios')

  // var data = JSON.stringify({ registrationNumber: 'AA19AAA' })

  // var config = {
  //   method: 'post',
  //   url: 'https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles',
  //   headers: {
  //     'x-api-key': 'REPLACE WITH YOUR API KEY',
  //     'Content-Type': 'application/json',
  //   },
  //   data: data,
  // }

  // axios(config)
  //   .then(function (response) {
  //     console.log(JSON.stringify(response.data))
  //   })
  //   .catch(function (error) {
  //     console.log(error)
  //   })
})
