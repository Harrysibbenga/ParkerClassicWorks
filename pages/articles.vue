<template>
  <div>
    <v-container fluid class="px-lg-16">
      <v-row>
        <v-col
          v-for="(item, index) in articles"
          :key="index"
          cols="12"
          lg="6"
          xl="4"
        >
          <ui-card :post="item" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    articles() {
      return this.$store.getters['posts/getPosts']
    },
  },
}
</script>
