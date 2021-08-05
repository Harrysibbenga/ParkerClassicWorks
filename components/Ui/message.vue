<template>
  <v-col
    cols="12"
    class="text-center mt-2 d-none"
    :class="{ 'd-block': msg.status }"
  >
    <v-alert :color="msg.type">
      {{ msg.message }}
    </v-alert>
  </v-col>
</template>

<script>
export default {
  props: {
    msg: {
      type: Object,
      default: () => ({
        type: 'info',
      }),
    },
  },
  watch: {
    msg(val) {
      if (val.status === true) {
        setTimeout(() => {
          // eslint-disable-next-line vue/no-mutating-props
          this.msg.status = false
        }, 5000)
      }
    },
  },
}
</script>
