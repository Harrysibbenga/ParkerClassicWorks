<template>
  <v-row no-gutters>
    <v-col cols="12">
      <v-card class="secondary">
        <v-img :src="post.url" :alt="post.alt" max-height="90vh">
          <v-row class="d-none d-md-block fill-height">
            <v-col cols="12" class="d-flex align-end fill-height">
              <v-card-text>
                <p class="text-h2 white--text font-weight-light">News:</p>
                <h1 class="text-h3 white--text font-weight-medium">
                  {{ post.title }}
                </h1>
              </v-card-text>
            </v-col>
          </v-row>
        </v-img>
        <v-card-text class="d-md-none">
          <p class="text-h5 text-sm-h4 font-weight-light">News:</p>
          <h1
            class="
              text-h5 text-sm-h4
              secondary
              primary--text
              font-weight-medium
            "
          >
            {{ post.title }}
          </h1>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" class="pt-10">
      <v-container>
        <div class="py-5 text-justify" v-html="post.content"></div>
      </v-container>
    </v-col>

    <v-col v-if="post.gallery.length > 0" cols="12">
      <v-container>
        <v-row>
          <v-col
            v-for="(src, index) in post.gallery"
            :key="index"
            cols="6"
            md="4"
            @click="() => showImg(index)"
          >
            <v-img :src="src.url" :alt="src.alt"></v-img>
          </v-col>
          <v-col cols="12" class="text-center" v-html="post.imgDesc"></v-col>
          <client-only>
            <vue-easy-lightbox
              :visible="visible"
              :imgs="images"
              :index="imgIndex"
              @hide="handleHide"
            ></vue-easy-lightbox>
          </client-only>
        </v-row>
      </v-container>
    </v-col>

    <v-col v-if="post.quotes.length > 0" cols="12">
      <v-col
        v-for="(content, index) in post.quotes"
        :key="index"
        cols="12"
        class="py-15"
      >
        <v-container>
          <h2>{{ content.name }}</h2>
          <div class="py-5 text-justify" v-html="content.content"></div>
        </v-container>
      </v-col>
    </v-col>
  </v-row>
</template>

<script>
import { filter } from '@/mixins/filter'

export default {
  name: 'Post',
  mixins: [filter],
  data() {
    return {
      slug: '',
      post: {},
      imgIndex: 0,
      visible: false,
      images: [],
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
          content: 'https://stephenjelley.com/' + this.slug,
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
    const slug = this.$route.params.slug
    this.$store.dispatch('posts/setPostSlug', slug).then((data) => {
      this.post = data
      data.gallery.forEach((img) => {
        this.images.push(img.url)
      })
    })
  },
  destroyed() {
    this.$store.commit('posts/clearPost')
  },
  methods: {
    showImg(index) {
      this.imgIndex = index
      this.visible = true
    },
    handleHide() {
      this.visible = false
    },
  },
}
</script>
