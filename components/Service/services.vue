<template>
  <v-container>
    <v-row>
      <h2 class="white--text text-h4 text-md-h2 py-10">Our Services</h2>
      <v-col
        v-for="(item, i) in services"
        :key="i"
        cols="12"
        md="10"
        lg="8"
        class="offset-md-1 offset-lg-2"
      >
        <v-card color="transparent" elevation="0">
          <div class="d-flex white--text">
            <div class="ma-3">
              <v-img
                :src="require('../../assets/images/' + item.url)"
                height="auto"
                width="100px"
              ></v-img>
            </div>

            <div class="white--text">
              <v-card-text>
                <h3>{{ item.title }}</h3>
                <p>{{ item.text }}</p>
              </v-card-text>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    services: {
      type: Array,
      required: true,
    },
  },
}
</script>
