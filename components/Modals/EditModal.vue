<template>
  <v-dialog
    v-model="editModal"
    fullscreen
    transition="dialog-bottom-transition"
  >
    <v-card v-if="type == 'article'">
      <v-card-title>{{ post.content.title }}</v-card-title>
      <v-card-text>
        <PostImageUpload :image.sync="post.image" />
        <PostStandardForm class="mt-5" :content.sync="post.content" />
        <PostQuotes :quotes.sync="post.quotes" />
        <PostGallery :gallery="post.gallery" />
        <p class="mt-16">Image captions</p>
        <ui-editor :content.sync="post.imgDesc" />
      </v-card-text>
      <v-card-actions class="mt-10">
        <v-btn color="error" @click.native="cancelEdit">Close</v-btn>
        <v-btn color="primary" @click.native="saveEdit">Save changes</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    edit: {
      type: Object,
      default: () => ({}),
    },
    modal: {
      type: Boolean,
      default: false,
    },
    confirmation: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      updatedPost: {},
    }
  },
  computed: {
    editModal: {
      get() {
        return this.modal
      },
      set(newVal) {
        this.$emit('update:modal', newVal)
      },
    },
    post: {
      get() {
        return this.edit
      },
      set(newVal) {
        this.updatedPost = newVal
      },
    },
    tracks() {
      return this.$store.getters['circuit/getPosts']
    },
  },
  methods: {
    saveEdit() {
      this.$emit('update:confirmation', true)
      this.$emit('update:edit', this.updatedPost)
      this.close()
    },
    cancelEdit() {
      this.$emit('update:confirmation', false)
      this.close()
    },
    close() {
      this.editModal = false
    },
  },
}
</script>
