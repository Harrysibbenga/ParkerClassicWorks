<template>
  <v-container>
    <v-row align="center">
      <v-col cols="12">
        <v-row class="text-center">
          <v-col cols="4">
            <label for="make" class="text-h5 mx-auto">Make:</label>
            <v-text-field
              v-model="carDetails.carInfo.CarMake.CurrentTextValue"
              name="make"
              class="mt-4 mx-auto disabled-input"
              solo
              dense
              disabled
            >
            </v-text-field>
          </v-col>
          <v-col cols="4">
            <label for="model" class="text-h5 mx-auto">Model:</label>
            <v-text-field
              v-model="carDetails.carInfo.CarModel.CurrentTextValue"
              name="model"
              class="mt-4 mx-auto disabled-input"
              solo
              dense
              disabled
            >
            </v-text-field>
          </v-col>
          <v-col cols="4">
            <label for="year" class="text-h5 mx-auto">Year:</label>
            <v-text-field
              v-model="carDetails.carInfo.RegistrationYear"
              name="year"
              class="mt-4 mx-auto disabled-input"
              solo
              dense
              disabled
            >
            </v-text-field>
          </v-col>
          <v-col cols="4" class="offset-4">
            <label for="services" class="text-h5 mx-auto">Services: </label>
            <v-select
              v-model="services"
              :items="items"
              name="services"
              class="mt-4 mx-auto disabled-input"
              multiple
              chips
              solo
              dense
              disabled
            >
            </v-select>
          </v-col>
        </v-row>
        <v-row>
          <section-contact
            :services="services"
            :car-details="carDetails"
          ></section-contact>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    contact: {
      type: Object,
      default: () => ({}),
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
    }
  },
  computed: {
    carDetails() {
      return this.contact.carDetails
    },
    services() {
      return this.contact.services
    },
  },
}
</script>
