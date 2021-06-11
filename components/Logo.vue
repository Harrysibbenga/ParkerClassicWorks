<template>
  <v-img
    :src="require('../assets/images/svg/logo.svg')"
    :max-width="width"
    :max-height="height"
  ></v-img>
</template>
<script>
export default {
  props: {
    width: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
  },
}
</script>
