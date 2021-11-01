<template>
  <v-container>
    <v-row align="center" style="min-height: 300px">
      <v-col v-for="(item, i) in items" :key="i">
        <nuxt-link :to="item.link">
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
          url: 'partners/Trackstar Logo.png',
        },
        {
          link: '/detailing',
          url: 'partners/SONAX Logo.png',
        },
        {
          link: '/hre',
          url: 'partners/HRE Logo.png',
        },
        {
          link: '/akrapovic',
          url: 'partners/Akrapovic Logo.png',
        },
      ],
    }
  },
}
</script>
