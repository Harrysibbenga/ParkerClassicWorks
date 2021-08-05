<template>
  <v-container>
    <v-row align="center" class="fill-height my-auto">
      <v-col cols="12" class="text-center py-16">
        <label for="services" class="text-h5 mx-auto"
          >What service or services do you require ?</label
        >
        <v-select
          v-model="selectedServices"
          :items="items"
          name="services"
          multiple
          chips
          label="Services"
          class="white--text mt-4 mx-auto"
          solo
          dense
          style="width: 500px"
        ></v-select>
        <v-btn
          color="secondary"
          x-large
          class="rounded-pill pa-6 mt-n3"
          style="width: 150px"
          @click.native="updateServices"
          >Confirm</v-btn
        >
      </v-col>
      <ui-message :msg="msg"></ui-message>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    services: {
      type: Array,
      default: () => [],
    },
    confirm: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      items: [
        'Minor Service',
        'Major Service',
        'MOT',
        'Health Checks',
        'Pre-Purchase Inspection',
        'Suspension and Geometry',
        'Engine and Gearbox rebuild',
        'Track preparation',
        'Restoration',
      ],
      selectedServices: [],
      msg: {
        status: false,
        message: '',
        type: '',
      },
    }
  },
  methods: {
    updateServices() {
      if (this.selectedServices.length > 0) {
        this.$emit('update:services', this.selectedServices)
        this.$emit('update:confirm', true)
      } else {
        this.msg = {
          status: true,
          message: 'Please select a service',
          type: 'error',
        }
      }
    },
  },
}
</script>
