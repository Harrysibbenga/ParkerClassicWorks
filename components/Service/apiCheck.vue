<template>
  <v-container>
    <v-row align="center">
      <v-col cols="12" md="6" class="text-center py-16 offset-md-3">
        <label for="car-reg" class="text-h5 mx-auto"
          >Enter your car registration:</label
        >
        <v-text-field
          v-model="reg"
          name="car-reg"
          class="white--text mt-4 mx-auto"
          solo
          dense
          style="width: 500px"
        ></v-text-field>
        <v-btn
          color="secondary"
          x-large
          class="rounded-pill pa-6 mt-n3"
          style="width: 150px"
          @click.native="getReg(carInfo, motInfo, reg)"
          >Submit</v-btn
        >
      </v-col>
      <v-col v-if="view" cols="12" class="py-10">
        <v-row class="text-center">
          <v-col cols="12" md="4">
            <label for="car-reg" class="text-h5 mx-auto">Make:</label>
            <v-text-field
              :value="carInfo.CarMake.CurrentTextValue"
              name="car-reg"
              class="white--text mt-4 mx-auto"
              solo
              dense
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <label for="car-reg" class="text-h5 mx-auto">Model:</label>
            <v-text-field
              :value="carInfo.CarModel.CurrentTextValue"
              name="car-reg"
              class="white--text mt-4 mx-auto"
              solo
              dense
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <label for="car-reg" class="text-h5 mx-auto">Year:</label>
            <v-text-field
              :value="carInfo.RegistrationYear"
              name="car-reg"
              class="white--text mt-4 mx-auto"
              solo
              dense
            ></v-text-field>
          </v-col>
        </v-row>
      </v-col>
      <v-col v-if="view" cols="12">
        <v-row>
          <v-col cols="12" class="text-center">
            <v-btn
              color="secondary"
              x-large
              class="rounded-pill pa-md-6 mt-n3"
              @click.native="confirm"
              >Find a service</v-btn
            >
          </v-col>
        </v-row>
      </v-col>
      <ui-message :msg="msg"></ui-message>
    </v-row>
  </v-container>
</template>

<script>
const { DOMParser } = require('xmldom')
export default {
  props: {
    carData: {
      type: Object,
      default: () => ({}),
    },
    motData: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      reg: '',
      view: false,
      msg: {
        status: false,
        message: '',
        type: '',
      },
    }
  },
  computed: {
    carInfo: {
      get() {
        return this.carData
      },
      set(newValue) {
        this.$emit('update:carData', newValue)
      },
    },
    motInfo: {
      get() {
        return this.motData
      },
      set(newValue) {
        this.$emit('update:motData', newValue)
      },
    },
    mobile() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return true
        case 'sm':
          return true
        default:
          return false
      }
    },
  },
  methods: {
    getReg(carInfo, motInfo, reg) {
      this.msg = {
        type: 'info',
        message: 'Fetching vehicle information please wait...',
        status: true,
      }

      const url = 'http://www.regcheck.org.uk/api/reg.asmx/Check'

      const params = new URLSearchParams()
      params.append('username', 'ParkerClassic')
      params.append('RegistrationNumber', reg)

      const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }

      this.$axios
        .post(url, params, config)
        .then((response) => {
          const car = this.convertCarXML(response.data)
          car.reg = reg
          this.carInfo = car
          console.log('carData -----> ', this.carInfo)
          return car
        })
        .then((car) => {
          const url = 'http://www.regcheck.org.uk/api/reg.asmx/UKMOT'

          console.log(car)

          const params = new URLSearchParams()
          params.append('username', 'ParkerClassic')
          params.append('RegistrationNumber', reg)
          params.append('Model', car.CarModel.CurrentTextValue)

          const config = {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          }

          this.$axios
            .post(url, params, config)
            .then((response) => {
              const mot = this.convertMotXML(response.data)
              this.motInfo = mot
              console.log('MotData -----> ', this.motInfo)
              this.view = true
              this.msg.status = false
            })
            .catch((error) => {
              this.msg = {
                type: 'error',
                message: error.message,
                status: true,
              }
            })
        })
        .catch((error) => {
          this.msg = {
            type: 'error',
            message: error.message,
            status: true,
          }
        })
    },
    convertCarXML(xml) {
      const doc = new DOMParser().parseFromString(xml)
      const data = JSON.parse(doc.childNodes[2].childNodes[1].firstChild.data)

      return data
    },
    convertMotXML(xml) {
      const doc = new DOMParser().parseFromString(xml)
      const nodes = doc.lastChild.childNodes
      const history = JSON.parse(nodes[5].firstChild.data)
      const taxDate = nodes[3].firstChild.data
      const extraInfo = JSON.parse(nodes[9].firstChild.data)

      const data = {
        history,
        taxDate,
        extraInfo,
      }

      return data
    },
    confirm() {
      this.$emit('update:confirm', true)
      this.reg = this.carInfo.reg
    },
    decline() {
      this.reset()
    },
    reset() {
      this.$emit('update:data', {})
      this.view = false
    },
  },
}
</script>
