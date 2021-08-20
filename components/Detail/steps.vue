<template>
  <v-container fluid>
    <v-row class="primary" style="min-height: 100vh">
      <v-img
        v-for="(item, i) in items"
        :key="i"
        :src="require('../../assets/images/' + item.url)"
        height="100vh"
        :class="{
          'zoom-show': active === i,
          'default-img': active !== i,
        }"
      >
        <div class="overlay">
          <v-container class="fill-height">
            <v-row class="text-center white--text" style="width: 60vw">
              <v-col cols="12" class="d-flex flex-column">
                <h2
                  class="display-1 font-weight-bold py-10 pointer"
                  @click="goBack"
                >
                  {{ item.title }}
                </h2>
                <p>{{ item.text }}</p>

                <v-btn plain color="white" @click="goBack"
                  >Click to return >></v-btn
                >
              </v-col>
            </v-row>
          </v-container>
        </div>
      </v-img>

      <v-col
        cols="12"
        class="d-none d-lg-block pa-0 default-img-row-detail"
        :class="{ 'zoom-hide': slide !== null }"
      >
        <v-row no-gutters>
          <v-col v-for="(item, i) in items" :key="i" cols="6">
            <v-img
              :src="require('../../assets/images/' + item.url)"
              class="pointer"
              :class="{ 'd-none': active !== null }"
              height="50vh"
              @mouseenter="hover(i)"
              @mouseleave="hover(null)"
              @click="view(i)"
            >
              <div class="px-2 default-left-detail primary">
                <h2 class="text-h4 white--text text-uppercase">
                  <span>{{ item.title }}</span>
                </h2>
              </div>
            </v-img>
          </v-col>
        </v-row>
      </v-col>

      <v-row class="overflow-hidden d-lg-none">
        <v-col cols="12" class="d-flex flex-center">
          <ul class="text-center white--text ma-auto list-style">
            <li
              v-for="(item, i) in items"
              :key="i"
              class="py-2 default-text pointer"
              :class="{
                'move-up-1': slide !== null && i == 0,
                'move-up-2': slide !== null && i == 1,
                'move-down-1': slide !== null && i == 2,
                'move-down-2': slide !== null && i == 3,
                'fade-text': slide !== null,
                'd-none': active !== null,
              }"
              @click="view(i)"
            >
              {{ item.title }}
            </li>
          </ul>
        </v-col>
      </v-row>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      slide: null,
      active: null,
      side: null,
      items: [
        {
          url: 'detail/Decontamination.png',
          title: 'Cleaning & decontamination',
          text: 'This consists of touchless decontamination with snow foam and pressure wash, touchless tar and removal, and touchless iron fallout removal. The wheels will be fully decontaminated with appropriate chemicals and the car will be pressure washed and hand washed using pH neutral products. The car is also treated with a clay bar as well. Once dried, it will then be moved into the detailing lab where the paint will be inspected. From here your vehicle will go through the stage process, dependent on your needs or requirements.',
        },
        {
          url: 'detail/4-Stage-Polish.png',
          title: 'Polishing stages',
          text: 'Our stage one services involves giving your vehicle a once over with a fine machine polish, while stage two utilises both a medium and fine finish with a suitable brush and chemicals. If required, stage three involves a coarse polish, before the medium and fine levels from stages one and two, while stage four involves wet sand. This may only be minor in places, or it could be on whole panels to remove orange peel.',
        },
        {
          url: 'detail/Serum-Protection.png',
          title: 'Serum application',
          text: 'On top of the polishing stages, there will be a serum application ranging from one to seven years, dependent on specific customer requirements, to help your car have a long-lasting showroom shine.',
        },
        {
          url: 'detail/Wax-Ceramic-PPF.png',
          title: 'Final protection',
          text: 'Once work has been completed, your car can be finished and protected with a quality wax, ceramic coating, or with paint protection film, so it leaves Parker ',
        },
      ],
    }
  },
  methods: {
    view(index) {
      this.slide = index
      setTimeout(() => {
        this.active = index
      }, 500)
    },
    goBack() {
      this.active = null
      setTimeout(() => {
        this.slide = null
      }, 600)
    },
    hover(index) {
      this.side = index
    },
  },
}
</script>

<style>
.zoom-show {
  transform: scale(1);
  transition: transform 0.5s ease-in;
  position: relative;
}

.zoom-hide {
  transform: scale(0);
  transition: transform 0.5s ease-in;
  position: relative;
}

.default-img-row-detail {
  transition: all 0.5s ease-in;
}

.default-img {
  transition: all 0.5s ease-in;
  transform: scale(0);
  position: absolute;
}

.default-text {
  transition: all 0.2s ease-in;
  opacity: 1;
}

.pointer {
  cursor: pointer;
}

.fade-text {
  opacity: 0;
  transition: opacity 1s ease-in;
}

.move-up-1 {
  transition: all 0.2s ease-in;
  transform: translateY(-400px);
}

.move-up-2 {
  transition: all 0.2s 0.2s ease-in;
  transform: translateY(-400px);
}

.move-down-2 {
  transition: all 0.2s ease-in;
  transform: translateY(400px);
}

.move-down-1 {
  transition: all 0.2s 0.2s ease-in;
  transform: translateY(400px);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(27, 63, 121, 0.6);
}

.list-style {
  list-style-type: none;
  font-size: 1.5rem;
  font-weight: bold;
}

.default-left-detail {
  position: absolute;
  left: 0;
  bottom: 20%;
  margin-left: 50px;
  text-align: right;
  min-width: fit-content;
}
</style>
