<template>
  <v-row>
    <v-col
      v-for="(item, i) in items"
      :key="i"
      class="d-flex align-center justify-center"
    >
      <a :href="item.url" target="_blank">
        <img
          :src="require('../../assets/images/' + item.src)"
          :alt="item.alt"
        />
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
