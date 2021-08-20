const functions = require('firebase-functions')
const { Nuxt } = require('nuxt-start')
const nuxtConfig = require('./nuxt.config.js')
const axios = require('axios')
const cors = require('cors')({ origin: true })

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
  cors(req, res, () => {
    if (req.method == 'POST') {
      const plate = req.query.plateNumber

      const data = JSON.stringify({ registrationNumber: plate })

      console.log(data)

      const apiConfig = {
        method: 'post',
        url: 'https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles',
        headers: {
          'x-api-key': 'IRrH9VhM8Da1Efdy7IEhwapHw2lGhVqm2EmsHDuf',
          'Content-Type': 'application/json',
        },
        data: data,
      }
      axios(apiConfig)
        .then(function (response) {
          let carInformation = JSON.stringify(response.data)
          res.send(carInformation)
        })
        .catch(function (error) {
          res.send(error.message)
        })
    } else {
      res.send('Please send a post request')
    }
  })
})
