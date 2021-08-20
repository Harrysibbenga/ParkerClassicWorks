<template>
  <div v-if="feature">
    <v-img
      :src="feature.url"
      :alt="feature.alt"
      min-height="800px"
      class="d-flex align-end"
    >
      <v-row class="text-left white--text gradient">
        <v-col cols="12 pt-15">
          <nuxt-link
            :to="{ name: 'article-slug', params: { slug: feature.slug } }"
            class="text-decoration-none white--text"
          >
            <p class="display-1 mb-0 px-5">News and Features:</p>
            <h2 class="display-1 font-weight-bold px-5">
              {{ feature.title }}
            </h2>
          </nuxt-link>
        </v-col>
        <v-col cols="12" class="text-center">
          <ui-more-btn
            :page="{ name: 'article-slug', params: { slug: feature.slug } }"
          ></ui-more-btn>
        </v-col>
      </v-row>
    </v-img>
  </div>
</template>

<script>
import { cloneDeep } from 'lodash'
export default {
  computed: {
    feature() {
      const posts = cloneDeep(this.$store.getters['posts/getPosts'])
      return posts[0]
    },
  },
}
</script>
