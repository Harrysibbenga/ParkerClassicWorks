<template>
  <v-container fluid class="pa-0">
    <v-row no-gutters>
      <v-col cols="12">
        <service-head :head="post.head"></service-head>
      </v-col>
      <v-col cols="12">
        <service-mid :mid="post.mid"></service-mid>
      </v-col>
      <v-col cols="12">
        <service-booking></service-booking>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      post: {
        head: {
          url: 'porsche/IMG_3569.jpg',
          title: 'Porcshe',
          position: 'left',
        },
        mid: {
          url: 'svg/feature.svg',
          title: 'The Porcshe range',
        },
      },
    }
  },
}
</script>
