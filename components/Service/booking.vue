<template>
  <div>
    {{ slide }}
    <transition mode="out-in" name="slide">
      <v-col v-if="slide === 0" cols="12">
        <v-btn icon @click.native="slide = 1"
          >Next <v-icon>mdi-chevron-right</v-icon></v-btn
        >
      </v-col>
      <v-col v-if="slide === 1" cols="12">
        <v-row align="center" justify="space-around">
          <v-btn icon @click.native="slide = 0"
            >Prev <v-icon>mdi-chevron-left</v-icon></v-btn
          >
          <v-btn icon @click.native="slide = 2"
            >Next <v-icon>mdi-chevron-right</v-icon></v-btn
          >
        </v-row>
      </v-col>
      <v-col v-if="slide === 2" cols="12">
        <v-btn icon @click.native="slide = 1"
          >Prev <v-icon>mdi-chevron-left</v-icon></v-btn
        >
      </v-col>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
    }
  },
}
</script>
