<template>
  <v-row align="center" justify="center" style="width: 100%">
    <v-col cols="12" class="text-center pt-10">
      <h3>Visit other websites in the Parker group:</h3>
    </v-col>
    <v-col v-for="(item, i) in items" :key="i" cols="12" md="4">
      <a :href="item.url" target="_blank">
        <v-img
          v-if="i === 0"
          :src="require('../../assets/images/' + item.src)"
          :alt="item.alt"
          :max-width="'220px'"
          class="text-center mx-auto"
        ></v-img>
        <v-img
          v-else
          :src="require('../../assets/images/' + item.src)"
          :alt="item.alt"
          :max-width="'100px'"
          class="text-center mx-auto"
        ></v-img>
      </a>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          url: 'https://teamparkerracing.com',
          alt: 'Team Parker Racing Logo',
          src: 'svg/tpr.svg',
        },
        {
          url: 'https://mjphospitality.co.uk',
          alt: 'MJP Hospitality Logo',
          src: 'svg/mjp.svg',
        },
        {
          url: '#',
          alt: 'Sonic 7 Cars Logo',
          src: 'svg/sonic.svg',
        },
      ],
    }
  },
}
</script>
