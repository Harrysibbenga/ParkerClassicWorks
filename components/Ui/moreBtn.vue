<template>
  <div>
    <v-btn
      v-if="mobileRes || tabletRes"
      :nuxt="true"
      :to="link"
      plain
      color="white"
      >Tap for more >></v-btn
    >
    <v-btn v-else :to="link" :nuxt="true" plain color="white"
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
      required: true,
    },
  },
}
</script>
