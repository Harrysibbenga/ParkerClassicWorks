<template>
  <div>
    <!-- article post type  -->
    <v-container>
      <h1 class="font-weight-bold text-center pb-2">Add News Item</h1>
      <div class="pt-2">
        <PostImageUpload :image.sync="post.image" />
        <PostStandardForm :content.sync="post.content" />
        <PostQuotes :quotes.sync="post.quotes" />
        <PostGallery :gallery.sync="post.gallery" />
        <p class="mt-16">Image captions</p>
        <ui-editor :content.sync="post.imgDesc"></ui-editor>
        <ui-message :msg="msg" />
        <v-btn class="mt-5" color="primary" @click.native="submitForm"
          >Add Post</v-btn
        >
      </div>
    </v-container>
  </div>
</template>

<script>
import { postsCol } from '@/services/firebase'

export default {
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
      post: {
        image: {
          id: '',
          url: '',
          alt: '',
        },
        imgDesc: '',
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
  methods: {
    reset() {
      this.post = {
        image: {
          id: '',
          url: '',
          alt: '',
        },
        gallery: [],
        content: {
          type: 'post',
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
      }
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

      postsCol
        .add({
          title: this.post.content.title,
          excerpt: this.post.content.excerpt,
          slug: this.post.slug,
          date: this.post.content.date,
          content: this.post.content.content,
          quotes: this.post.quotes,
          year: this.post.year,
          createdOn: new Date(),
          imgId: this.post.image.id,
          url: this.post.image.url,
          alt: this.post.image.alt,
          imgDesc: this.post.imgDesc,
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
          type: 'warning',
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
