<template>
  <v-row no-gutters>
    <v-col
      v-for="(item, i) in items"
      :key="i"
      name="expand"
      mode="out-in"
      :class="{
        growCont: side === i,
        shrinkCont: side !== i,
      }"
      @mouseenter="active(i)"
      @mouseleave="active(null)"
    >
      <nuxt-link :to="item.link" class="">
        <v-img :src="require('../../assets/images/' + item.url)" height="90vh">
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
            <h2 v-if="side === i" class="text-h4 white--text text-uppercase">
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
          url: 'caterham/MALC4695.jpg',
          title: 'Caterham',
          link: '/caterham',
        },
        {
          url: 'porsche/IMG_3569.jpg',
          title: 'Porsche',
          link: '/porsche',
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
