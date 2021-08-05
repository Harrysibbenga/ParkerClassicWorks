<template>
  <v-container>
    <v-row align="center" style="max-height: 500px">
      <v-col v-for="(item, i) in items" :key="i">
        <a :href="item.link" target="_blank">
          <v-img
            :src="require('../../assets/images/' + item.url)"
            :max-height="100"
            :max-width="300"
            class="mx-auto my-10"
          ></v-img>
        </a>
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
          link: '/',
          url: 'partners/trackstar.svg',
        },
        {
          link: '/',
          url: 'partners/xpel.svg',
        },
        {
          link: '/',
          url: 'partners/akrapovic.svg',
        },
      ],
    }
  },
}
</script>
