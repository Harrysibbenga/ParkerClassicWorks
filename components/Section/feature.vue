<template>
  <v-img :src="require('../../assets/images/' + feature.url)" height="100vh">
    <v-row class="text-center white--text">
      <v-col cols="12 py-16">
        <p class="display-1 mb-0">Feature:</p>
        <h2 class="display-1 font-weight-bold">The perfect getaway</h2>
      </v-col>
      <v-col cols="12">
        <ui-more-btn :link="feature.link"></ui-more-btn>
      </v-col>
    </v-row>
  </v-img>
</template>

<script>
import { responsive } from '@/mixins/responsive'
export default {
  mixins: [responsive],
  data() {
    return {
      feature: {
        url: 'svg/feature.svg',
        link: '/',
      },
    }
  },
}
</script>
