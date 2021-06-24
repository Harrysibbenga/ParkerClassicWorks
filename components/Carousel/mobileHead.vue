<template>
  <v-carousel
    v-model="slide"
    :show-arrows="false"
    hide-delimiters
    cycle
    height="100vh"
  >
    <v-carousel-item v-for="(item, i) in items" :key="i">
      <v-img :src="require('../../assets/images/' + item.url)" height="100vh">
        <v-col cols="12 z-index-20">
          <ui-more-btn
            :link="{ name: 'service-type', params: { type: item.type } }"
            class="text-center pt-16 mt-16"
          ></ui-more-btn>
        </v-col>
      </v-img>
    </v-carousel-item>
    <v-container fluid class="absolute fill-height">
      <v-row
        class="d-flex flex-column text-uppercase white--text my-auto mr-3"
        align="end"
        justify="end"
      >
        <transition
          v-for="(item, i) in items"
          :key="i"
          name="expand"
          mode="in-out"
        >
          <div
            class="default px-2"
            :class="{
              primary: slide === i,
              grow: slide === i,
              shrink: slide !== i,
            }"
          >
            <h2 v-if="slide === i" class="text-h4 white--text text-uppercase">
              {{ item.title }}
            </h2>
            <h2 v-else class="text-h5"></h2>
          </div>
        </transition>
      </v-row>
      <v-row class="px-10 align-end" justify="center">
        <div v-for="(item, i) in items" :key="i">
          <v-btn
            v-if="slide === i"
            x-small
            class="primary mx-5"
            @click.native="moveTo(i)"
          ></v-btn>
          <v-btn
            v-else
            x-small
            class="secondary mx-5"
            @click.native="moveTo(i)"
          ></v-btn>
        </div>
      </v-row>
    </v-container>
  </v-carousel>
</template>

<script>
/* eslint-disable no-unused-expressions */
export default {
  data() {
    return {
      items: [
        {
          url: 'caterham/MALC4695.jpg',
          title: 'Caterham',
          type: 'caterham',
        },
        {
          url: 'porsche/IMG_3569.jpg',
          title: 'Porsche',
          type: 'porsche',
        },
      ],
      slide: 0,
    }
  },
  methods: {
    moveTo(n) {
      this.slide = n
    },
  },
}
</script>
