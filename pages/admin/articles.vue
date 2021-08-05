<template>
  <div>
    <admin-add-post :post-data="post"></admin-add-post>
    <admin-edit-posts :posts="posts" :article="true"></admin-edit-posts>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {
        image: {
          id: '',
          url: '',
          alt: '',
        },
        gallery: [],
        content: {
          type: 'article',
          title: '',
          content: '',
          excerpt: '',
          date: '',
        },
        quotes: [
          {
            name: '',
            content: '',
          },
        ],
        slug: '',
        year: '',
      },
    }
  },
  computed: {
    posts() {
      return this.$store.getters['posts/getPosts']
    },
  },
}
</script>
