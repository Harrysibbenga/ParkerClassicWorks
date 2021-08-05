<template>
  <v-container>
    <v-row no-gutters>
      <h3 class="text-h6 mx-auto pb-3">Newsletter Sign up:</h3>
      <v-col cols="10"
        ><v-text-field
          v-model="email"
          tile
          solo
          class="rounded-0"
        ></v-text-field
      ></v-col>
      <v-col cols="2"
        ><v-btn tile color="secondary" class="py-6">Submit</v-btn></v-col
      >
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      email: '',
    }
  },
}
</script>
