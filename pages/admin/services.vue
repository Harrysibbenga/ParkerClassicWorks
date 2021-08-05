<template>
  <div>
    <admin-add-post :post-data="service"></admin-add-post>
    <admin-edit-posts :posts="services"></admin-edit-posts>
  </div>
</template>

<script>
export default {
  data() {
    return {
      service: {
        image: {
          id: '',
          url: '',
          alt: '',
        },
        subimage: {
          id: '',
          url: '',
          alt: '',
        },
        content: {
          type: 'service',
          title: '',
          subtitle: '',
          content: '',
          excerpt: '',
        },
        slug: '',
        year: '',
      },
    }
  },
  computed: {
    services() {
      return this.$store.getters['services/getPosts']
    },
  },
}
</script>
