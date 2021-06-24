<template>
  <v-img :src="require('../../assets/images/' + mid.url)" height="100vh">
    <v-col col="12" md="6" lg="4" class="text-center">
      <h2 class="text-h1 white--text pa-5 font-weight-bold">
        {{ mid.title }}
      </h2>
    </v-col>
  </v-img>
</template>

<script>
export default {
  props: {
    mid: {
      type: Object,
      required: true,
    },
  },
}
</script>
