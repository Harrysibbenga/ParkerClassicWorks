<template>
  <v-row no-gutters>
    <v-col
      v-for="(item, i) in items"
      :key="i"
      cols="6"
      @mouseenter="active(i)"
      @mouseleave="active(null)"
    >
      <nuxt-link :to="item.link" class="">
        <v-img :src="require('../../assets/images/' + item.url)" :height="700">
          <div
            class="px-2"
            :class="{
              'default-left': i === 0,
              'default-right': i === 1,
              primary: side === i,
              grow: side === i,
              shrink: side !== i,
            }"
          >
            <h2 v-if="side === i" class="text-h5 white--text">
              {{ item.title }}
            </h2>
            <h2 v-else class="text-h5"></h2>
          </div>
        </v-img>
      </nuxt-link>
    </v-col>
  </v-row>
</template>

<script>
/* eslint-disable no-unused-expressions */
export default {
  data() {
    return {
      side: null,
      items: [
        {
          url: 'caterham/svg/caterham_head.svg',
          title: 'Caterham',
          link: '/',
        },
        {
          url: 'porsche/svg/porsche_head.svg',
          title: 'Porsche',
          link: '/',
        },
      ],
    }
  },
  methods: {
    active(i) {
      this.side = i
    },
  },
}
</script>

<style lang="scss">
.default-right,
.default-left {
  background-color: #5cb4e5 !important;
  width: 50px;
  height: 50px;
  position: absolute;
}
.default-left {
  left: 0;
  bottom: 20%;
  margin-left: 50px;
  text-align: right;
}

.default-right {
  right: 0;
  top: 20%;
  margin-right: 50px;
}

.grow {
  transition: all 3s ease;
  width: 180px;
}

.shrink {
  background-color: #5cb4e5 !important;
  width: 50px;
  height: 50px;
  transition: all 3s ease;
}
</style>
