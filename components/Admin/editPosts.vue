<template>
  <v-container fluid>
    <PostEditPosts
      :posts="posts"
      :edit.sync="editModal"
      :delete.sync="deleteModal"
      :post.sync="emitedPost"
    />
    <ModalsDeleteModal
      :modal.sync="deleteModal"
      :item.sync="emitedPost"
      :confirmation.sync="confirmDelete"
    />
    <ModalsEditModal
      :modal.sync="editModal"
      :edit.sync="clickedPost"
      :confirmation.sync="confirmEdit"
      :type="'article'"
    />
  </v-container>
</template>

<script>
import { postsCol } from '@/services/firebase'

export default {
  props: {
    posts: {
      type: Array,
      default: () => [],
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
  computed: {
    clickedPost: {
      get() {
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
            content: this.emitedPost.content,
            excerpt: this.emitedPost.excerpt,
            date: this.emitedPost.date,
          },
          quotes: this.emitedPost.quotes,
          slug: this.emitedPost.slug,
          year: this.emitedPost.year,
          id: this.emitedPost.id,
          imgDesc: this.emitedPost.imgDesc,
        }
        return clickedPost
      },
      set(newVal) {
        this.newPost = newVal
      },
    },
  },
  watch: {
    confirmDelete(newVal, oldVal) {
      if (newVal === true) {
        this.deleteConfirm(newVal)
      }
    },
    confirmEdit(newVal, oldVal) {
      if (newVal === true) {
        this.editConfirm(newVal)
      }
    },
  },
  methods: {
    deleteConfirm(confirm) {
      if (confirm) {
        postsCol
          .doc(this.clickedPost.id)
          .delete()
          .then(() => {
            this.deleteModal = false
            this.msg = {
              type: 'danger',
              message: 'Post deleted',
            }
            setTimeout(() => {
              this.msg = {
                type: '',
                message: '',
              }
            }, 2000)
          })
          .catch((error) => {
            this.msg = {
              type: 'warning',
              message: error.message,
            }
            setTimeout(() => {
              this.msg = {
                type: '',
                message: '',
              }
            }, 2000)
          })
      }
    },
    editConfirm(confirm) {
      if (confirm) {
        let slugArry = []
        const newSlug = []
        let date = ''
        // create slug
        slugArry = this.clickedPost.content.title.split(' ')
        date = this.clickedPost.content.date
        this.clickedPost.year = date.split('-')[0]

        slugArry.forEach((item) => {
          newSlug.push(item.toLowerCase())
        })

        this.clickedPost.slug = newSlug.join('-') + '-' + date

        if (this.clickedPost.image.url === '') {
          this.clickedPost.image.url = this.defaultImg.url
          this.clickedPost.image.alt = this.defaultImg.alt
        }

        postsCol
          .doc(this.clickedPost.id)
          .update({
            title: this.clickedPost.content.title,
            excerpt: this.clickedPost.content.excerpt,
            slug: this.clickedPost.slug,
            date: this.clickedPost.content.date,
            content: this.clickedPost.content.content,
            quotes: this.clickedPost.quotes,
            year: this.clickedPost.year,
            lastUpdateOn: new Date(),
            imgId: this.clickedPost.image.id,
            url: this.clickedPost.image.url,
            alt: this.clickedPost.image.alt,
            imgDesc: this.clickedPost.imgDesc,
            type: this.clickedPost.content.type,
            gallery: this.clickedPost.gallery,
          })
          .then(() => {
            this.reset()
            this.msg = {
              type: 'success',
              message: 'Post updated',
            }
            setTimeout(() => {
              this.msg = {
                type: '',
                message: '',
              }
            }, 2000)
          })
          .catch((err) => {
            this.msg = {
              type: 'warning',
              message: err.message,
            }
            setTimeout(() => {
              this.msg = {
                type: '',
                message: '',
              }
            }, 2000)
          })
      }
    },
  },
}
</script>
