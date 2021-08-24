const functions = require('firebase-functions')
const { Nuxt } = require('nuxt-start')
const nuxtConfig = require('./nuxt.config.js')
const axios = require('axios')
const cors = require('cors')({ origin: true })
const https = require('follow-redirects').https
const fs = require('fs')

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

exports.ssrappUk = functions
  .region('europe-west2')
  .https.onRequest(async (req, res) => {
    await nuxt.ready()
    nuxt.render(req, res)
  })

exports.VESApi = functions
  .region('europe-west2')
  .https.onRequest(async (req, res) => {
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

exports.VESApi2 = functions
  .region('europe-west2')
  .https.onRequest(async (req, res) => {
    cors(req, res, () => {
      if (req.method == 'POST') {
        const plate = req.query.plateNumber

        const data = JSON.stringify({ registrationNumber: plate })

        console.log(data)

        const options = {
          method: 'POST',
          hostname: 'driver-vehicle-licensing.api.gov.uk',
          path: '/vehicle-enquiry/v1/vehicles',
          headers: {
            'x-api-key': 'IRrH9VhM8Da1Efdy7IEhwapHw2lGhVqm2EmsHDuf',
            'Content-Type': 'application/json',
          },
          maxRedirects: 20,
        }

        const vesReq = https.request(options, function (vesRes) {
          const chunks = []

          vesRes.on('data', function (chunk) {
            chunks.push(chunk)
          })

          vesRes.on('end', function (chunk) {
            const body = Buffer.concat(chunks)
            console.log(body.toString())
            res.send(body)
          })

          vesRes.on('error', function (error) {
            console.error(error)
            res.send(error)
          })
        })

        vesReq.write(data)

        vesReq.end()
      } else {
        res.send('Please send a post request')
      }
    })
  })
