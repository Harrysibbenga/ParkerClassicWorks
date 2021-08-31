<template>
  <v-app>
    <app-head app></app-head>
    <v-main>
      <v-container fluid class="pa-0">
        <nuxt />
      </v-container>
    </v-main>
    <app-foot app></app-foot>
  </v-app>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('images/setImages')
    this.$store.dispatch('career/setContent')
    this.$store.dispatch('posts/setPosts')
  },
}
</script>
