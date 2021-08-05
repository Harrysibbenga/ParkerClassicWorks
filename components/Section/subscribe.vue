<template>
  <v-row no-gutters>
    <h3 class="text-h6 mx-auto pb-3">Newsletter Sign up:</h3>
    <v-col cols="12"
      ><v-text-field v-model="email" tile solo class="rounded-0"></v-text-field>
      <v-btn tile color="secondary" class="mt-n13">Submit</v-btn>
    </v-col>
  </v-row>
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
