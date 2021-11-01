<template>
  <v-container>
    <v-row align="center" class="fill-height ma-auto flex-row" justify="center">
      <v-col class="py-16">
        <v-select
          v-model="selectedServices"
          :items="items"
          name="services"
          multiple
          chips
          label="What services do you require ?"
          class="white--text mt-4 ml-auto"
          solo
          dense
          style="width: 500px"
        ></v-select>
      </v-col>
      <v-col class="text-center">
        <v-btn
          color="secondary"
          x-large
          class="rounded-pill pa-6 mt-n3"
          style="width: 150px"
          @click.native="updateServices"
          >Confirm</v-btn
        >
      </v-col>
    </v-row>
    <ui-message :msg="msg"></ui-message>
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
