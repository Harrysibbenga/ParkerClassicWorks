<template>
  <v-row justify="center" align="center" no-gutters>
    <v-col cols="12">
      <carousel-laptop-head v-if="laptopRes"></carousel-laptop-head>
      <carousel-mobile-head v-else></carousel-mobile-head>
    </v-col>
    <v-col cols="12" class="primary white--text">
      <v-container class="text-center py-16">
        <p class="text-size py-8">
          Parker Classic Works is a brand-new restoration and servicing centre
          in the Midlands. It has a particular focus on Caterham and Porsche
          servicing, but all marques are catered for, with experienced Porsche
          mechanics utilising the skill and knowledge of Team Parker Racing’s
          almost quarter of a century of success competing with Porsche,
          Caterham, and other prestige manufacturers.
          <br />
          <br />
          The Parker family name has been synonymous with car sales and
          servicing in the Midlands going back to 1920, so for the go-to Porsche
          service near you with a meticulous focus and attention to detail,
          contact the team for more information today.
          <br />
          <br />
          Parker Classic Works is <strong>Precision. Delivered.</strong>
        </p>
      </v-container>
    </v-col>
    <v-col cols="12">
      <section-feature></section-feature>
    </v-col>
    <v-col clos="12">
      <service-booking></service-booking>
    </v-col>
    <v-col cols="12" class="white py-16">
      <section-insta></section-insta>
    </v-col>
    <v-col cols="12">
      <carousel-about></carousel-about>
    </v-col>
  </v-row>
</template>

<script>
import { responsive } from '@/mixins/responsive'
export default {
  mixins: [responsive],
}
</script>
