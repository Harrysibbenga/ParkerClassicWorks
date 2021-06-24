<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <service-head :head="post.head"></service-head>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      post: {},
    }
  },
  head() {
    return {
      title: this.post.title,
      meta: [
        {
          property: 'og:title',
          content: this.post.title,
        },
        {
          property: 'og:description',
          content: this.post.excerpt,
        },
        {
          property: 'og:url',
          content: 'https://stephenjelley.com/' + this.type,
        },
        {
          property: 'og:image',
          content: this.post.url,
        },
        {
          property: 'og:site_name',
          content: 'Stephen Jelley | Official Website',
        },
        { property: 'og:type', content: 'post' },
        { name: 'robots', content: 'index,follow' },
        {
          hid: 'description',
          name: 'description',
          content: this.post.excerpt,
        },
      ],
    }
  },
  created() {
    const type = this.$route.params.type
    this.$store.dispatch('posts/setPost', type).then((data) => {
      this.post = data
    })
  },
  destroyed() {
    this.$store.commit('posts/clearPost')
  },
}
</script>
