<template>
  <v-container>
    <h2 class="font-weight-bold text-center pb-2">Careers Page</h2>
    <v-row>
      <v-col>
        <h3 class="font-weight-bold text-center pb-2">Headline image</h3>
        <PostImageUpload :image.sync="post.image" />
      </v-col>
      <v-col>
        <h3 class="font-weight-bold text-center pb-2">Support image</h3>
        <PostImageUpload :image.sync="post.image_2" />
      </v-col>
    </v-row>
    <PostStandardForm :content.sync="post.content" />
    <UiMessage :msg="msg" />
    <v-btn class="mt-5" color="primary" @click.native="update"
      >Update content</v-btn
    >
  </v-container>
</template>

<script>
import { careerCol } from '@/services/firebase'
import _ from 'lodash'

export default {
  data() {
    return {
      msg: {
        type: '',
        message: '',
      },
      defaultImg: {
        url: 'https://firebasestorage.googleapis.com/v0/b/jhr-developments-c5bba.appspot.com/o/images%2Fimg-placeholder.png?alt=media&token=7d9c5978-d45d-4049-91d9-ceb235823db7',
        alt: 'Placeholder Image',
      },
      type: 'image',
    }
  },
  computed: {
    post() {
      const original = this.$store.getters['career/getContent']
      const copy = _.cloneDeep(original)
      const post = {
        id: copy.id,
        image: {
          id: copy.imgId,
          url: copy.url,
          alt: copy.alt,
        },
        image_2: {
          id: copy.imgId,
          url: copy.url,
          alt: copy.alt,
        },
        content: {
          type: 'career',
          title: copy.title,
          content: copy.content,
        },
      }
      return post
    },
  },
  methods: {
    update() {
      if (this.post.image.url === '') {
        this.post.image.url = this.defaultImg.url
        this.post.image.alt = this.defaultImg.alt
      }

      if (this.post.image_2.url === '') {
        this.post.image_2.url = this.defaultImg.url
        this.post.image_2.alt = this.defaultImg.alt
      }

      careerCol
        .doc(this.post.id)
        .update({
          title: this.post.content.title,
          content: this.post.content.content,
          lastUpdateOn: new Date(),
          imgId: this.post.image.id,
          url: this.post.image.url,
          alt: this.post.image.alt,
          type: this.post.content.type,
          support: {
            imgId: this.post.image_2.id,
            url: this.post.image_2.url,
            alt: this.post.image_2.alt,
          },
        })
        .then(() => {
          this.msg = {
            type: 'success',
            message: 'Career section updated',
          }
          setTimeout(() => {
            this.msg = {
              type: '',
              message: '',
            }
          }, 4000)
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
          }, 4000)
        })
    },
  },
}
</script>
