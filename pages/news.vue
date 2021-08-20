<template>
  <div>
    <v-row justify="center" align="center" no-gutters>
      <v-col cols="12">
        <detail-head :head="head" />
      </v-col>
      <v-col cols="12" class="primary white--text">
        <v-container fluid class="px-lg-16">
          <v-row>
            <v-col
              v-for="(item, index) in articles"
              :key="index"
              cols="12"
              md="6"
              xl="4"
            >
              <ui-card :post="item" />
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      head: {
        url: 'news/News-headline.png',
        title: 'NEWS & FEATURES',
      },
    }
  },
  computed: {
    articles() {
      return this.$store.getters['posts/getPosts']
    },
  },
}
</script>
