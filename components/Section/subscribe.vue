<template>
  <v-row>
    <v-col cols="12">
      <h3 class="text-h6 mx-auto pb-3">Newsletter Sign up:</h3>
    </v-col>
    <v-col cols="12">
      <v-row no-gutters align="center" justify="center" class="flex-center">
        <v-col cols="12" md="10">
          <v-text-field
            v-model="email"
            tile
            solo
            class="rounded-0"
            :height="'50px'"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="2">
          <v-btn class="mt-n10 mt-md-n9" :height="'50px'" tile color="secondary"
            >Submit</v-btn
          >
        </v-col>
      </v-row>
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
