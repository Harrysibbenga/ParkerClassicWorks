export const responsive = {
  computed: {
    mobileRes() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return true
        case 'sm':
          return true
        default:
          return false
      }
    },
    laptopRes() {
      switch (this.$vuetify.breakpoint.name) {
        case 'md':
          return true
        case 'lg':
          return true
        case 'xl':
          return true
        default:
          return false
      }
    },
  },
}
