<template>
  <v-container>
    <v-row align="center" style="max-height: 500px">
      <v-col v-for="(item, i) in items" :key="i">
        <a v-if="i == 1" :href="item.link" target="_blank">
          <v-img
            :src="require('../../assets/images/' + item.url)"
            :max-height="150"
            :max-width="300"
            class="mx-auto my-10"
          ></v-img>
        </a>
        <nuxt-link v-else :to="item.link">
          <v-img
            :src="require('../../assets/images/' + item.url)"
            :max-height="150"
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
        {
          link: 'https://www.sonax.com/',
          url: 'partners/sonax.png',
        },
        {
          link: '/akrapovic',
          url: 'partners/akrapovic.svg',
        },
      ],
    }
  },
}
</script>
