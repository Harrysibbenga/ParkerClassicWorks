<template>
  <v-app>
    <v-main>
      <v-container fluid class="pa-0">
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('images/setImages')
    this.$store.dispatch('posts/setPosts')
  },
}
</script>
