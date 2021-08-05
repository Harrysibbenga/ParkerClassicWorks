<template>
  <div>
    <admin-add-post></admin-add-post>
    <admin-edit-posts :posts="posts" :article="true"></admin-edit-posts>
  </div>
</template>

<script>
export default {
  computed: {
    posts() {
      return this.$store.getters['posts/getPosts']
    },
  },
}
</script>
