<template>
  <div>
    <v-text-field v-model="reg"> </v-text-field>
    <v-btn color="success" @click.native="getReg">Car Reg</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {},
      reg: '',
    }
  },
  computed: {
    result() {
      return this.$store.getters['dvla/result']
    },
    error() {
      return this.$store.getters['dvla/error']
    },
  },
  methods: {
    getReg() {
      this.$axios
        .post('http://127.0.0.1:5000/api/v1/', {
          headers: {
            'Content-Type': 'application/json',
          },
          body: { plate: this.reg },
        })
        .then((response) => {
          this.data = response.data
        })
        .catch((error) => {
          this.alert = {
            type: 'error',
            message: error.message,
            hidden: false,
          }
        })
    },
  },
}
</script>
