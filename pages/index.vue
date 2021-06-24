<template>
  <v-row justify="center" align="center" no-gutters>
    <v-col cols="12">
      <carousel-laptop-head v-if="laptopRes"></carousel-laptop-head>
      <carousel-mobile-head v-else></carousel-mobile-head>
    </v-col>
    <v-col cols="12">
      <section-feature></section-feature>
    </v-col>
    <v-col cols="12">
      <carousel-about></carousel-about>
    </v-col>
    <service-booking></service-booking>
  </v-row>
</template>

<script>
import { responsive } from '@/mixins/responsive'
export default {
  mixins: [responsive],
}
</script>
