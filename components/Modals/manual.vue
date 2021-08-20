<template>
  <v-col cols="12" md="6" class="text-center">
    <v-btn
      v-if="!mobile"
      color="secondary"
      x-large
      class="rounded-pill pa-6 mt-n3"
      @click.native="manualDialog"
      >Manually submit details</v-btn
    >
    <v-btn
      v-else
      color="secondary"
      x-large
      class="rounded-pill pa-6 mt-n3"
      @click.native="manualDialog"
      >Enter Manually</v-btn
    >
  </v-col>
</template>
