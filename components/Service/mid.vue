<template>
  <v-img
    :src="require('../../assets/images/' + mid.url)"
    height="100vh"
  ></v-img>
</template>

<script>
export default {
  props: {
    mid: {
      type: Object,
      required: true,
    },
  },
}
</script>
