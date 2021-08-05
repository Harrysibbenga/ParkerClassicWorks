<template>
  <v-container fluid>
    <PostEditPosts
      :posts="posts"
      :edit.sync="editModal"
      :delete.sync="deleteModal"
      :post.sync="emitedPost"
    />
    <ModalDeleteModal
      :modal.sync="deleteModal"
      :item.sync="emitedPost"
      :confirmation.sync="confirmDelete"
    />
    <ModalEditModal
      :modal.sync="editModal"
      :edit.sync="clickedPost"
      :confirmation.sync="confirmEdit"
      :quote="article"
      :gallery="article"
    />
  </v-container>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      default: () => [],
    },
    article: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      editModal: false,
      deleteModal: false,
      confirmDelete: false,
      confirmEdit: false,
      emitedPost: {},
      newPost: {},
    }
  },
  clickedPost: {
    get() {
      if (this.emitedPost.type === 'article') {
        const clickedPost = {
          image: {
            id: this.emitedPost.imgId,
            url: this.emitedPost.url,
            alt: this.emitedPost.alt,
          },
          gallery: this.emitedPost.gallery,
          content: {
            type: this.emitedPost.type,
            title: this.emitedPost.title,
            track: this.emitedPost.track,
            content: this.emitedPost.content,
            excerpt: this.emitedPost.excerpt,
            date: this.emitedPost.date,
          },
          quotes: this.emitedPost.quotes,
          slug: this.emitedPost.slug,
          year: this.emitedPost.year,
          id: this.emitedPost.id,
        }
        return clickedPost
      } else {
        const clickedPost = {
          image: {
            id: this.emitedPost.imgId,
            url: this.emitedPost.url,
            alt: this.emitedPost.alt,
          },
          gallery: this.emitedPost.gallery,
          content: {
            type: this.emitedPost.type,
            title: this.emitedPost.title,
            track: this.emitedPost.track,
            content: this.emitedPost.content,
            excerpt: this.emitedPost.excerpt,
            date: this.emitedPost.date,
          },
          quotes: this.emitedPost.quotes,
          slug: this.emitedPost.slug,
          year: this.emitedPost.year,
          id: this.emitedPost.id,
        }
        return clickedPost
      }
    },
    set(newVal) {
      this.newPost = newVal
    },
  },
}
</script>
