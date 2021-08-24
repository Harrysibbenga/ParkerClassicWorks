<template>
  <v-img :src="head.url" height="90vh">
    <div class="px-2 default-left primary" style="width: auto">
      <h2 class="text-h4 white--text text-uppercase">
        {{ head.title }}
      </h2>
    </div>
  </v-img>
</template>

<script>
export default {
  props: {
    head: {
      type: Object,
      required: true,
    },
  },
}
</script>
