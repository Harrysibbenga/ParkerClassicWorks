<template>
  <div>
    <v-btn
      v-if="!laptopRes"
      :nuxt="true"
      :to="link == '' ? page : link"
      plain
      color="white"
      >Tap for more >></v-btn
    >
    <v-btn
      v-else
      :to="link == '' ? page : link"
      :nuxt="true"
      plain
      color="white"
      >Click for more >></v-btn
    >
  </div>
</template>

<script>
import { responsive } from '@/mixins/responsive'
export default {
  mixins: [responsive],
  props: {
    link: {
      type: String,
      default: '',
    },
    page: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
