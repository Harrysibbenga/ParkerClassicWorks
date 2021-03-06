<template>
  <v-container>
    <v-row>
      <v-col cols="12" lg="8" class="offset-lg-2">
        <form @submit.prevent="submit">
          <v-row align="center">
            <v-col cols="12" md="6">
              <v-text-field
                v-model="fname"
                solo
                :error-messages="fnameErrors"
                name="fname"
                label="First name"
                color="white"
                required
                @input="$v.fname.$touch()"
                @blur="$v.fname.$touch()"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="lname"
                solo
                :error-messages="lnameErrors"
                name="lname"
                label="Last name"
                color="white"
                required
                @input="$v.lname.$touch()"
                @blur="$v.lname.$touch()"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="phone"
                :error-messages="phoneErrors"
                :counter="11"
                solo
                label="Phone number"
                name="phone"
                color="white"
                required
                @input="$v.phone.$touch()"
                @blur="$v.phone.$touch()"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="email"
                :error-messages="emailErrors"
                label="Email"
                name="email"
                color="white"
                solo
                required
                @input="$v.email.$touch()"
                @blur="$v.email.$touch()"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea
                v-model="message"
                name="message"
                label="Message"
                light
                solo
                :error-messages="messageErrors"
                color="white"
                clearable
                required
                @input="$v.message.$touch()"
                @blur="$v.message.$touch()"
              ></v-textarea>
            </v-col>
            <v-col cols="12" class="text-center">
              <v-btn class="mr-4 rounded-pill" :class="btnColor" type="submit">
                submit
              </v-btn>
              <v-btn class="mr-4 white rounded-pill" @click.native="clear">
                clear
              </v-btn>
            </v-col>
          </v-row>
          <v-alert v-if="msg.message" :type="msg.type" class="mt-6">
            {{ msg.message }}
          </v-alert>
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { emailData } from '@/services/firebase'
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],

  validations: {
    fname: { required },
    lname: { required },
    phone: { required, maxLength: maxLength(11) },
    email: { required, email },
    message: { required },
  },

  props: {
    carDetails: {
      type: Object,
      default: () => ({}),
    },
    services: {
      type: Array,
      default: () => [],
    },
    subject: {
      type: String,
      default: 'General Enquiry',
    },
    title: {
      type: String,
      default: '',
    },
    btnColor: {
      type: String,
      default: 'white',
    },
  },

  data: () => ({
    fname: '',
    lname: '',
    phone: '',
    email: '',
    message: '',
    msg: {
      type: '',
      message: '',
    },
  }),

  computed: {
    fnameErrors() {
      const errors = []
      if (!this.$v.fname.$dirty) return errors
      !this.$v.fname.required && errors.push('Frist name is required.')
      return errors
    },
    lnameErrors() {
      const errors = []
      if (!this.$v.lname.$dirty) return errors
      !this.$v.lname.required && errors.push('Last name is required.')
      return errors
    },
    phoneErrors() {
      const errors = []
      if (!this.$v.phone.$dirty) return errors
      !this.$v.phone.maxLength &&
        errors.push('Phone number must be at most 11 digits long')
      !this.$v.phone.required && errors.push('Phone number is required.')
      return errors
    },
    emailErrors() {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },
    messageErrors() {
      const errors = []
      if (!this.$v.message.$dirty) return errors
      !this.$v.message.required && errors.push('A message is required.')
      return errors
    },
  },

  methods: {
    submit() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.msg = {
          type: 'error',
          message: 'Please fill the form correctly!',
        }
      } else {
        this.msg = {
          type: 'info',
          message: 'Sending ...',
        }

        const templateParams = {
          fname: this.fname,
          lname: this.lname,
          phone: this.phone,
          message: this.message,
          email: this.email,
          subject: this.subject,
          carDetails: this.carDetails,
          services: this.services,
        }

        this.save()
        this.generatePDFSendEmail(templateParams)
      }
    },
    save() {
      emailData
        .add({
          fname: this.fname,
          lname: this.lname,
          email: this.email,
          services: this.services,
          message: this.message,
          carInfo: {
            make: this.carDetails.carInfo.CarMake.CurrentTextValue,
            model: this.carDetails.carInfo.CarModel.CurrentTextValue,
            reg: this.carDetails.carInfo.reg,
            year: this.carDetails.carInfo.RegistrationYear,
          },
          motInfo: {
            history: this.carDetails.motInfo.history,
            taxDate: this.carDetails.motInfo.taxDate,
          },
        })
        .catch((err) => {
          console.log(err)
          this.msg = {
            type: 'error',
            message: err.message,
          }
        })
    },
    generatePDFSendEmail(custData) {
      const url = 'https://pdf-creator.herokuapp.com/create_pdf'

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }

      this.$axios
        .post(url, JSON.stringify(custData), config)
        .then((response) => {
          console.log('Data -----> ', JSON.stringify(custData))
          console.log(response.data)
          this.msg = {
            type: 'succses',
            message: 'Message Sent, Someone will be in touch soon',
          }
          this.reset()
        })
        .catch((err) => {
          this.msg = {
            type: 'error',
            message: err.message,
          }
        })
    },
    clear() {
      this.reset()
      this.msg = {
        type: '',
        message: '',
      }
    },
    reset() {
      this.$v.$reset()
      this.fname = ''
      this.lname = ''
      this.phone = ''
      this.email = ''
      this.message = ''
    },
  },
}
</script>

<style scoped>
h3 {
  text-align: right;
  min-width: fit-content;
}
</style>
