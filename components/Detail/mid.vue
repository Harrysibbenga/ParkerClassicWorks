<template>
  <v-img
    :src="require('../../assets/images/' + mid.url)"
    :height="height"
    :width="width"
  ></v-img>
</template>

<script>
export default {
  props: {
    mid: {
      type: Object,
      required: true,
    },
    height: {
      type: String,
      default: '100vh',
    },
    width: {
      type: String,
      default: '100%',
    },
  },
}
</script>
