<template>
  <div>
    <!-- service post type  -->
    <v-container>
      <h1 class="font-weight-bold text-center pb-2">Add New Service</h1>

      <v-row class="pt-2">
        <v-col cols="12">
          <h2>Images</h2>
          <v-row>
            <v-col cols="6">
              <PostImageUpload :image.sync="post.image" />
            </v-col>
            <v-col cols="6">
              <PostImageUpload :image.sync="post.image_2" />
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12">
          <PostStandardForm :content.sync="post.content" />
          <UiMessage :msg="msg" />
          <v-btn class="mt-5" color="primary" @click.native="submitForm"
            >Add Service</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { serviceCol } from '@/services/firebase'

export default {
  props: {
    postData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      defaultImg: {
        url: 'https://firebasestorage.googleapis.com/v0/b/jhr-developments-c5bba.appspot.com/o/images%2Fimg-placeholder.png?alt=media&token=7d9c5978-d45d-4049-91d9-ceb235823db7',
        alt: 'Placeholder Image',
      },
      msg: {
        type: '',
        message: '',
      },
    }
  },
  computed: {
    post: {
      get() {
        return this.postData
      },
      set(newValue) {
        this.$emit('update:postData', newValue)
      },
    },
  },
  methods: {
    reset() {
      this.post = {
        image: {
          id: '',
          url: '',
          alt: '',
        },
        image_2: {
          id: '',
          url: '',
          alt: '',
        },
        gallery: [],
        content: {
          type: 'service',
          title: '',
          track: '',
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
      }
      this.confirmEdit = false
      this.confirmDelete = false
    },
    addPost() {
      let slugArry = []
      const newSlug = []
      let date = ''
      // create slug
      slugArry = this.post.content.title.split(' ')
      date = this.post.content.date
      this.post.year = date.split('-')[0]

      slugArry.forEach((item) => {
        newSlug.push(item.toLowerCase())
      })

      this.post.slug = newSlug.join('-') + '-' + date

      if (this.post.image.url === '') {
        this.post.image.url = this.defaultImg.url
        this.post.image.alt = this.defaultImg.alt
      }

      serviceCol
        .add({
          title: this.post.content.title,
          excerpt: this.post.content.excerpt,
          slug: this.post.slug,
          date: this.post.content.date,
          content: this.post.content.content,
          quotes: this.post.quotes,
          track: this.post.content.track,
          year: this.post.year,
          createdOn: new Date(),
          imgId: this.post.image.id,
          url: this.post.image.url,
          alt: this.post.image.alt,
          type: this.post.content.type,
          gallery: this.post.gallery,
        })
        .then(() => {
          this.reset()
          this.msg = {
            type: 'success',
            message: 'Post added',
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
    },
    submitForm() {
      if (this.post.content.date === '' || this.post.content.title === '') {
        this.msg = {
          type: 'Warning',
          message:
            'Missing information please make sure the post information is filled',
        }
        setTimeout(() => {
          this.msg = {
            type: '',
            message: '',
          }
        }, 2000)
      } else {
        this.addPost()
      }
    },
  },
}
</script>
