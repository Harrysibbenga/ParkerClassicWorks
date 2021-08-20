<template>
  <v-card
    class="mx-auto"
    max-width="600"
    min-height="400"
    :nuxt="true"
    :to="{ name: 'article-slug', params: { slug: post.slug } }"
  >
    <v-img
      class="secondary--text align-end"
      height="400px"
      :src="post.url"
      :alt="post.alt"
    >
    </v-img>

    <v-card-text class="primary--text text-center" style="min-height: 300px">
      <h4 class="text-h5 primary--text pa-5">{{ excerpt }}</h4>
      <v-row align="center" class="my-auto">
        <v-col cols="12">
          <v-btn
            color="primary"
            x-large
            :nuxt="true"
            :to="{ name: 'article-slug', params: { slug: post.slug } }"
            >Click for more</v-btn
          >
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { truncate } from '@/mixins/truncate'

export default {
  mixins: [truncate],
  props: {
    post: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    excerpt() {
      return this.truncateString(this.post.excerpt, 180)
    },
  },
}
</script>
