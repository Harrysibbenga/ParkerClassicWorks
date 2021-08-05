<template>
  <div>
    <v-row class="pt-3">
      <v-col cols="12">
        <h3>Gallery content</h3>
      </v-col>
      <v-col cols="12">
        <div class="d-flex">
          <ModalsMultiUpload
            :images.sync="images"
            :type="type"
          ></ModalsMultiUpload>
          <ModalsSelectImagesModal
            :images.sync="images"
          ></ModalsSelectImagesModal>
        </div>
      </v-col>
      <v-row>
        <v-col
          v-for="(img, index) in galleryContent"
          :key="index"
          cols="6"
          md="4"
        >
          <v-img :src="img.url" :alt="img.alt" width="100%" height="100%" />
          <v-btn
            elevation="2"
            outlined
            @click="removeItem(index, galleryContent)"
            >Delete</v-btn
          >
        </v-col>
      </v-row>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    gallery: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      imageProp: [],
      type: 'image',
    }
  },
  computed: {
    galleryContent: {
      get() {
        return this.gallery
      },
      set(newVal) {
        this.$emit('update:gallery', newVal)
      },
    },
    images: {
      get() {
        return this.imageProp
      },
      set(newVal) {
        newVal.forEach((img) => {
          this.galleryContent.push(img)
        })
      },
    },
  },
  methods: {
    removeItem(index, gallery) {
      gallery.splice(index, 1)
    },
  },
}
</script>
