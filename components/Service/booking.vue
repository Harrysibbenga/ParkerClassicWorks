<template>
  <v-container fluid class="primary white--text">
    <h1 class="text-h3 pa-5 py-16">SERVICE ENQUIRY</h1>
    <v-row class="pb-10">
      <v-col cols="4" class="service-section" @click="slide = 0">
        <v-img
          :src="require('../../assets/images/svg/one.svg')"
          :class="{ opacity: slide != 0 }"
        ></v-img>
      </v-col>
      <v-col cols="4" class="service-section" @click="slide = 1">
        <v-img
          :src="require('../../assets/images/svg/two.svg')"
          :class="{ opacity: slide != 1 }"
        ></v-img>
      </v-col>
      <v-col cols="4" class="service-section" @click="slide = 2">
        <v-img
          :src="require('../../assets/images/svg/three.svg')"
          :class="{ opacity: slide != 2 }"
        ></v-img>
      </v-col>
    </v-row>
    <transition mode="out-in" name="slide" class="row">
      <v-col v-if="slide === 0" cols="12">
        <keep-alive>
          <service-reg-check
            :data.sync="formData.carDetails"
            :confirm.sync="confirmReg"
          ></service-reg-check>
        </keep-alive>
      </v-col>
      <v-col v-if="slide === 1" cols="12">
        <keep-alive>
          <service-type
            :services.sync="formData.services"
            :confirm.sync="confirmServ"
          ></service-type>
        </keep-alive>
      </v-col>
      <v-col v-if="slide === 2" cols="12">
        <keep-alive>
          <service-contact-info :contact="formData"></service-contact-info>
        </keep-alive>
      </v-col>
    </transition>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      formData: {
        carDetails: {
          reg: '',
          make: '',
          model: '',
          year: '',
        },
        contact: {
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          message: '',
        },
        services: [],
      },
    }
  },
  computed: {
    confirmReg: {
      get() {
        return false
      },
      set(newVal) {
        if (newVal === true) {
          this.slide = 1
        }
      },
    },
    confirmServ: {
      get() {
        return false
      },
      set(newVal) {
        if (newVal === true) {
          this.slide = 2
        }
      },
    },
  },
}
</script>
