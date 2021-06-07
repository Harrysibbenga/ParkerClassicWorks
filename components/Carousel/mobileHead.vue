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
        <ui-more-btn></ui-more-btn>
      </v-img>
    </v-carousel-item>
    <v-container class="absolute fill-height">
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
            <h2 v-if="slide === i" class="text-h5">
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
            small
            class="primary mx-5"
            @click.native="moveTo(i)"
          ></v-btn>
          <v-btn
            v-else
            small
            class="white mx-5"
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
          url: 'porsche/svg/porsche_head.svg',
          title: 'Porsche',
        },
        {
          url: 'caterham/svg/caterham_head.svg',
          title: 'Caterham',
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

<style>
.expand-enter-active,
.expand-leave-active {
  transition: all 3s ease;
}

.default {
  background-color: white;
  width: 50px;
  height: 50px;
}

.grow {
  transition: all 3s ease;
  width: 180px;
}

.shrink {
  background-color: white;
  width: 50px;
  height: 50px;
  transition: all 3s ease;
}
</style>
