<template>
  <section id="admin">
    <v-container id="admin-nav">
      <v-toolbar flat class="mt-4 mx-4">
        <v-toolbar-title>Website Dashboard</v-toolbar-title>
        <v-spacer></v-spacer>
        <NuxtLink to="/"> <v-icon class="mr-1">mdi-home</v-icon>Home </NuxtLink>
        <a @click="logout()">
          <v-icon icon="ban" class="mr-1" />
          Logout
        </a>
      </v-toolbar>

      <v-tabs center-active color="primary" class="mt-4 mx-4">
        <v-tab :nuxt="true" to="/admin">Home</v-tab>
        <v-tab :nuxt="true" to="/admin/services"> Services </v-tab>
        <v-tab :nuxt="true" to="/admin/articles"> Articles </v-tab>
      </v-tabs>
    </v-container>

    <nuxt-child class="pt-3"></nuxt-child>
  </section>
</template>

<script>
import { auth } from '@/services/firebase'
import Cookie from 'js-cookie'

export default {
  name: 'Admin',
  layout: 'admin',
  methods: {
    async logout() {
      await auth.signOut()
      await Cookie.remove('access_token')

      location.href = '/'
    },
  },
}
</script>
