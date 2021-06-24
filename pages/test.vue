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
        <!-- <service-search :collection="post.collection"></service-search> -->
        <service-reg-check></service-reg-check>
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
          url: 'caterham/MALC4695.jpg',
          title: 'Caterham',
          position: 'right',
        },
        mid: {
          url: 'caterham/MALC9063.jpg',
          title: 'The Caterham range',
        },
      },
    }
  },
}
</script>
