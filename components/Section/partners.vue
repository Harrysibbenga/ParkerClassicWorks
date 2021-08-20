<template>
  <v-container>
    <v-row align="center" style="max-height: 500px">
      <v-col v-for="(item, i) in items" :key="i">
        <nuxt-link :to="item.link">
          <v-img
            :src="require('../../assets/images/' + item.url)"
            :max-height="100"
            :max-width="300"
            class="mx-auto my-10"
          ></v-img>
        </nuxt-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          link: '/trackstar',
          url: 'partners/trackstar.svg',
        },
      ],
    }
  },
}
</script>
