<template>
  <v-container>
    <v-row>
      <v-col cols="12" lg="8" class="secondary mx-auto">
        <form @submit.prevent="submit">
          <v-row align="center">
            <v-col cols="12" md="6">
              <v-text-field
                v-model="name"
                :error-messages="nameErrors"
                :counter="30"
                name="name"
                label="Name"
                color="white"
                required
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="phone"
                :error-messages="phoneErrors"
                :counter="11"
                label="Phone number"
                name="phone"
                color="white"
                required
                @input="$v.phone.$touch()"
                @blur="$v.phone.$touch()"
              ></v-text-field>
            </v-col>
            <label for="street_address_1" class="pl-3">Address</label>
            <v-col cols="12">
              <v-text-field
                v-model="street_address_1"
                name="street_address_1"
                label="Street Address"
                color="white"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="street_address_2"
                name="street_address_2"
                label="Street Address Line 2"
                color="white"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="city"
                name="city"
                label="City"
                color="white"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="county"
                label="County"
                name="county"
                color="white"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="postcode"
                name="postcode"
                label="Postode"
                color="white"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="subject"
                :error-messages="subjectErrors"
                label="Subject"
                name="subject"
                color="white"
                required
                @input="$v.subject.$touch()"
                @blur="$v.subject.$touch()"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="email"
                :error-messages="emailErrors"
                label="Email"
                name="email"
                color="white"
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
                :error-messages="messageErrors"
                color="white"
                clearable
                required
                @input="$v.message.$touch()"
                @blur="$v.message.$touch()"
              ></v-textarea>
            </v-col>
            <v-col cols="12" class="text-center">
              <v-btn class="mr-4 white black--text" type="submit">
                submit
              </v-btn>
              <v-btn class="mr-4 white black--text" @click.native="clear">
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
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'
import emailjs from 'emailjs-com'

export default {
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(30) },
    phone: { required, maxLength: maxLength(15) },
    email: { required, email },
    message: { required },
    subject: { required },
  },

  data: () => ({
    name: '',
    phone: '',
    address: '',
    email: '',
    subject: '',
    message: '',
    msg: {
      type: '',
      message: '',
    },
  }),

  computed: {
    nameErrors() {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.maxLength &&
        errors.push('Name must be at most 30 characters long')
      !this.$v.name.required && errors.push('Name is required.')
      return errors
    },
    phoneErrors() {
      const errors = []
      if (!this.$v.phone.$dirty) return errors
      !this.$v.phone.maxLength &&
        errors.push('Phone number must be at most 15 characters long')
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
    subjectErrors() {
      const errors = []
      if (!this.$v.subject.$dirty) return errors
      !this.$v.subject.required && errors.push('Please enter a subject.')
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
    submit(event) {
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
        this.sendEmail(event)
      }
    },
    sendEmail(e) {
      emailjs
        .sendForm(
          'service_mqk22oq',
          'template_ac3abx9',
          e.target,
          'user_nzDfhN2MWfSPkCKqEp7Td'
        )
        .then(
          (result) => {
            console.log('SUCCESS!', result.status, result.text)
            console.log(e.target)
            this.msg = {
              type: 'success',
              message: 'Message sent someone will be in touch shortly',
            }
          },
          (error) => {
            console.log('FAILED...', error)
            this.msg = {
              type: 'error',
              message: error,
            }
          }
        )
        .then(() => {
          this.clear()
        })
    },
    clear() {
      this.$v.$reset()
      this.name = ''
      this.phone = ''
      this.email = ''
      this.subject = ''
      this.address = ''
      this.message = ''
      this.msg = {
        type: '',
        message: '',
      }
    },
  },
}
</script>
