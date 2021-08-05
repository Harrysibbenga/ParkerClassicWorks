<template>
  <v-img :src="require('../assets/images/svg/home.svg')" height="100vh">
    <v-row class="fill-height mx-auto" style="max-width: 700px">
      <h1
        class="
          align-self-end
          pb-16
          text-center
          mx-auto
          text-lg-h1 text-md-h2 text-h3
          font-weight-bold
          white--text
        "
      >
        New website launching soon
      </h1>
    </v-row>
  </v-img>
</template>

<script>
export default {
  layout: 'holding',
}
</script>
