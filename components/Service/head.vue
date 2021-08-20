<template>
  <v-img :src="require('../../assets/images/' + head.url)" height="90vh">
    <div
      class="px-2"
      :class="{
        'default-left': head.position === 'right',
        'default-right': head.position === 'left',
        primary: active,
        grow: active,
      }"
    >
      <h2 v-if="active" class="text-h4 white--text text-uppercase">
        {{ head.title }}
      </h2>
      <h2 v-else class="text-h5"></h2>
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
  data() {
    return {
      active: false,
    }
  },
  created() {
    setTimeout(() => {
      this.active = true
    }, 500)
  },
}
</script>
