<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-img
          v-if="image.url != ''"
          :src="image.url"
          :alt="image.alt"
          width="100%"
        />

        <v-img
          v-else
          :src="defaultImg.url"
          :alt="defaultImg.alt"
          width="100%"
        />
      </v-col>
      <v-col cols="12" class="text-center">
        <v-row align="center" justify="center">
          <ModalsUploadModal :image.sync="postImage" />
          <ModalsSelectImageModal :item.sync="postImage" :images="images" />
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: Object,
      default: () => ({
        url: '',
        alt: '',
        id: '',
      }),
    },
  },
  data() {
    return {
      defaultImg: {
        url: 'https://firebasestorage.googleapis.com/v0/b/jhr-developments-c5bba.appspot.com/o/images%2Fimg-placeholder.png?alt=media&token=7d9c5978-d45d-4049-91d9-ceb235823db7',
        alt: 'Placeholder Image',
      },
      postImage: null,
    }
  },
  computed: {
    images() {
      return this.$store.getters['images/images']
    },
  },
  watch: {
    postImage(newVal, oldVal) {
      if (newVal) {
        this.$emit('update:image', newVal)
      }
    },
  },
}
</script>
