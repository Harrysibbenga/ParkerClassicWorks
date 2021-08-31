<template>
  <div>
    <v-app-bar
      absolute
      color="transparent"
      class="z-index-10"
      :elevation="0"
      dark
      height="90"
      min-width="240"
    >
      <nuxt-link to="/">
        <Logo :width="200" :height="100" />
      </nuxt-link>

      <v-spacer />
      <v-app-bar-nav-icon
        x-large
        @click.stop="rightDrawer = !rightDrawer"
      ></v-app-bar-nav-icon>
    </v-app-bar>
    <v-expand-transition>
      <v-container
        v-show="rightDrawer"
        fluid
        class="position-fixed fill-height nav-container pa-0 primary"
      >
        <v-row>
          <v-col class="my-auto" cols="12">
            <v-list class="primary">
              <v-list-item
                v-for="(item, index) in navList"
                :key="index"
                :nuxt="true"
                :to="item.link"
                class="py-3"
                @click.native="close()"
              >
                <v-list-item-title class="white--text text-h6 text-center">
                  {{ item.title }}
                </v-list-item-title>
              </v-list-item>
              <v-list-item
                v-if="user"
                :nuxt="true"
                to="/admin"
                class="py-3"
                @click.native="close()"
              >
                <v-list-item-title class="white--text text-h6 text-center">
                  Admin
                </v-list-item-title>
              </v-list-item>
              <v-divider></v-divider>
            </v-list>
            <v-list-item :nuxt="true" to="/" @click.native="close()">
              <v-list-item-content>
                <v-list-item-title>
                  <Logo class="mx-auto mt-2" :width="300" :height="250" />
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-col>
        </v-row>
      </v-container>
    </v-expand-transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rightDrawer: false,
      navList: [
        {
          link: '/',
          title: 'Home',
        },
        {
          link: '/caterham',
          title: 'Caterham',
        },
        {
          link: '/porsche',
          title: 'Porsche',
        },
        {
          link: '/news',
          title: 'News and Features',
        },
        {
          link: '/detailing',
          title: 'Detailing',
        },
        {
          link: '/trackstar',
          title: 'Trackstar',
        },
        {
          link: '/akrapovic',
          title: 'Akrapovič',
        },
        {
          link: '/hre',
          title: 'HRE',
        },
      ],
    }
  },
  computed: {
    user() {
      return this.$store.getters['users/user']
    },
  },
  methods: {
    close() {
      setTimeout(() => {
        this.rightDrawer = false
      }, 500)
    },
  },
}
</script>

<style scoped>
.position-fixed {
  position: fixed;
}
.nav-container {
  z-index: 2;
  width: 100%;
  height: 100vh;
}
</style>
