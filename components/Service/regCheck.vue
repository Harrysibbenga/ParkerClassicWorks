<template>
  <v-container>
    <v-row align="center">
      <v-col cols="12" md="6" class="text-center py-16 offset-md-3">
        <label for="car-reg" class="text-h5 mx-auto"
          >Enter your car registration:</label
        >
        <v-text-field
          v-model="carInfo.reg"
          name="car-reg"
          class="white--text mt-4 mx-auto"
          solo
          dense
          style="width: 500px"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col cols="12" md="4">
        <label for="car-reg" class="text-h5 mx-auto">Make:</label>
        <v-text-field
          v-model="carInfo.make"
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
          v-model="carInfo.model"
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
          v-model="carInfo.year"
          name="car-reg"
          class="white--text mt-4 mx-auto"
          solo
          dense
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="text-center">
        <v-btn
          color="secondary"
          x-large
          class="rounded-pill pa-md-6 mt-n3"
          @click.native="getData"
          >Find a service</v-btn
        >
      </v-col>
      <ui-message :msg="msg"></ui-message>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      msg: {
        status: false,
        message: '',
        type: '',
      },
      view: false,
    }
  },
  computed: {
    carInfo: {
      get() {
        return this.data
      },
      set(newVal) {
        this.$emit('update:data', newVal)
      },
    },
  },
  methods: {
    getData() {
      const url = 'http://127.0.0.1:5000/'

      const params = new URLSearchParams()
      params.append('registrationNumber', this.carInfo.reg)

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Connection: 'keep-alive',
          Accept: '*/*',
          'Accept-Encoding': 'gzip, deflate, br',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST',
          'x-api-key': 'lRrH9VhM8Da1Efdy7IEhwapHw2lGhVqm2EmsHDuf',
        },
      }

      this.$axios
        .post(url, params, config)
        .then((response) => {
          console.log('carData -----> ', response.data)
        })
        .catch((error) => {
          this.msg = {
            type: 'error',
            message: error.message,
            status: true,
          }
          console.log(error)
        })
    },
    confirm() {
      if (this.carInfo.reg === '') {
        this.msg = {
          status: true,
          message: 'Please enter your car registration number',
          type: 'error',
        }
      } else if (this.carInfo.make === '') {
        this.msg = {
          status: true,
          message: 'Please enter your car make',
          type: 'error',
        }
      } else if (this.carInfo.model === '') {
        this.msg = {
          status: true,
          message: 'Please enter your car model',
          type: 'error',
        }
      } else if (this.carInfo.year === '') {
        this.msg = {
          status: true,
          message: 'Please enter your car year',
          type: 'error',
        }
      } else {
        this.$emit('update:confirm', true)
      }
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
