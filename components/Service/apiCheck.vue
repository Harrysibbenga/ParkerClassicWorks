<template>
  <div>
    <template>
      <v-container>
        <v-row align="center">
          <v-col cols="12" md="6" class="text-center py-16">
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
              @click.native="getReg"
              >Submit</v-btn
            >
            {{ data }}
          </v-col>
          <v-col cols="12" md="6" class="text-center">
            <v-btn
              v-if="!mobile"
              color="secondary"
              x-large
              class="rounded-pill pa-6 mt-n3"
              @click.native="manualDialog"
              >Manually submit details</v-btn
            >
            <v-btn
              v-else
              color="secondary"
              x-large
              class="rounded-pill pa-6 mt-n3"
              @click.native="manualDialog"
              >Enter Manually</v-btn
            >
          </v-col>
          <ui-message :msg="msg"></ui-message>
          <v-col v-if="view" cols="12" class="py-10">
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
          </v-col>
          <v-col v-if="view" cols="12">
            <v-row class="text-center">
              <v-col cols="12" md="6">
                <v-btn
                  v-if="!mobile"
                  color="secondary"
                  x-large
                  class="rounded-pill pa-md-6 mt-n3"
                  @click.native="confirm"
                  >Okay, that’s my car</v-btn
                >
                <v-btn
                  v-else
                  color="secondary"
                  x-large
                  class="rounded-pill pa-6 mt-n3"
                  @click.native="manualDialog"
                  >That’s my car</v-btn
                >
              </v-col>
              <v-col cols="12" md="6">
                <v-btn
                  v-if="!mobile"
                  color="secondary"
                  x-large
                  class="rounded-pill pa-md-6 mt-n3"
                  @click.native="decline"
                  >No, that’s not my car</v-btn
                >
                <v-btn
                  v-else
                  color="secondary"
                  x-large
                  class="rounded-pill pa-md-6 mt-n3"
                  @click.native="decline"
                  >Not my car</v-btn
                >
              </v-col>
            </v-row>
          </v-col>
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
            reg: '',
            msg: {
              status: false,
              message: '',
              type: '',
            },
            view: false,
          }
        },
        computed: {
          result() {
            return this.$store.getters['dvla/result']
          },
          error() {
            return this.$store.getters['dvla/error']
          },
          carInfo() {
            return this.data
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
          getReg() {
            // fetch('http://www.regcheck.org.uk/api/reg.asmx/Check', {
            //   method: 'POST',
            //   headers: {
            //     'Content-Type': 'application/x-www-form-urlencoded',
            //     'Content-Length': 'length',
            //   },
            //   data: { RegistrationNumber: this.reg, username: 'Torque' },
            // })
            //   .then((res) => res.json())
            //   .then((response) => {
            //     console.log(response)
            //   })
            const url = 'http://www.regcheck.org.uk/api/reg.asmx/Check'

            const params = new URLSearchParams()
            params.append('username', 'Torque')
            params.append('RegistrationNumber', this.reg)

            const config = {
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
              },
            }

            this.$axios
              .post(url, params, config)
              .then((response) => {
                this.$emit('update:data', response.data)
                this.view = true
              })
              .catch((error) => {
                this.msg = {
                  type: 'error',
                  message: error.message,
                  status: true,
                }
              })
          },
          confirm() {
            this.$emit('update:confirm', true)
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
  </div>
</template>
