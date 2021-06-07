<template>
  <v-img :src="require('../../assets/images/' + feature.url)" height="100vh">
    <v-row class="text-center white--text">
      <v-col cols="12 py-16">
        <p class="display-1 mb-0">Feature:</p>
        <h2 class="display-1 font-weight-bold">The perfect getaway</h2>
      </v-col>
    </v-row>
    <ui-more-btn></ui-more-btn>
  </v-img>
</template>

<script>
export default {
  data() {
    return {
      feature: {
        url: 'svg/feature.svg',
      },
    }
  },
}
</script>
