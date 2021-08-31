<template>
  <v-row justify="center" align="center" no-gutters>
    <v-col v-if="career.title" cols="12">
      <careers-head :head="career.head" />
    </v-col>
    <v-col cols="12" class="primary white--text">
      <v-container class="text-center py-16">
        <p class="text-size py-8">
          Parker Classic Works is staffed by experienced Race Technicians and
          highly trained individuals who have in-depth knowledge of prestige
          motoring brands.
          <br />
          <br />
          Parker Classic Works is <strong>Precision. Delivered.</strong>
        </p>
      </v-container>
    </v-col>
    <v-col v-if="career.title" cols="12" class="primary white--text px-md-10">
      <h2 class="text-h3">{{ career.title }}</h2>
      <hr style="width: 80%" class="mx-auto my-16" />
      <v-container class="text-center pb-16">
        <div class="application_text" v-html="career.content"></div>
      </v-container>
    </v-col>
    <v-col v-if="career.title" cols="12">
      <careers-mid :mid="career.mid" />
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      career: {
        head: {
          url: '',
          title: 'Careers',
          alt: '',
        },
        mid: {
          url: '',
        },
        content: '',
        title: '',
      },
    }
  },
  computed: {
    careerData() {
      return this.$store.getters['career/getContent']
    },
  },
  beforeMount() {
    this.career = {
      head: {
        url: this.careerData.url,
        title: 'Careers',
        alt: this.careerData.alt,
      },
      mid: {
        url: this.careerData.support.url,
      },
      content: this.careerData.content,
      title: this.careerData.title,
    }
  },
}
</script>

<style>
.application_text a {
  color: #fff !important;
}
</style>
