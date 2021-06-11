<template>
  <v-carousel
    v-model="slide"
    :show-arrows="false"
    hide-delimiters
    class="about-carousel"
  >
    <v-carousel-item v-for="(item, i) in items" :key="i">
      <v-card>
        <v-row no-gutters>
          <v-col cols="12" md="6">
            <v-img
              :src="require('../../assets/images/' + item.url)"
              class="about-img"
            >
              <v-row class="align-end fill-height white--text d-md-none">
                <v-card-title class="mx-auto text-center pa-5">
                  <h4>{{ item.title }}</h4>
                </v-card-title>
              </v-row>
            </v-img>
          </v-col>
          <v-col cols="12" md="6">
            <v-responsive class="about-content overflow-y-auto primary--text">
              <v-card-title class="d-none d-md-block">
                <h2 class="text-center mx-auto">{{ item.title }}</h2>
              </v-card-title>
              <v-card-text class="pt-5">
                <p v-html="item.content"></p>
              </v-card-text>
            </v-responsive>
          </v-col>
        </v-row>
      </v-card>
    </v-carousel-item>
    <v-container class="absolute">
      <v-row class="px-10 pt-10 flex-row" style="width: 100vw" justify="center">
        <div v-for="(item, i) in items" :key="i">
          <v-btn
            v-if="slide === i"
            x-small
            class="primary mx-2"
            @click.native="moveTo(i)"
          ></v-btn>
          <v-btn
            v-else
            x-small
            class="white mx-2"
            @click.native="moveTo(i)"
          ></v-btn>
        </div>
      </v-row>
    </v-container>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          url: 'porsche/svg/porsche_head.svg',
          title: 'Why Parker Classic Works?',
          content:
            'Precision. Delivered. <br/> <br/> These are the values Parker Classic Works stand by. With a family history in automotive sales, servicing, and repairs going back over 100 years, coupled with a quarter of a century of knowledge of competing in some of the biggest, best, and toughest motorsport events on the planet, the team know what it takes to look after machinery of all types. <br/> <br/> With a team of experienced mechanics utilising only the very best parts, on site detailing, partnerships with companies like Trackstar, XPEL, and Akrapovič, and a cosy, comfortable club house to relax in while you wait, Parker Classic Works is the obvious choice for servicing, maintenance, and remedial works for your car.<br/>',
        },
        {
          url: 'caterham/svg/caterham_head.svg',
          title: 'Values',
          content:
            'To win races and championships at the pinnacle of sprint and endurance racing it takes precision, a meticulous focus, attention to detail, and the knowledge that you only get one shot at success.<br/><br/> Parker Classic Works will apply this same mentality to your road-going Caterham or Porsche.<br/><br/> Precision. Delivered.<br/><br/>',
        },
        {
          url: 'caterham/svg/caterham_head.svg',
          title: 'Meet the team',
          content:
            'Stuart and Andy Parker grew up in a family that has owned and operated garages in the Midlands for over 100 years, going right back to their great-grandfather, Albert Parker, who first opened his business in 1920. Both their grandfather and father, Reg, and Geoff, also worked in the family business as well as owning and driving a number of rare and historic cars. <br/><br/>The brothers fell in love with motorsport as children and eventually found their racing exploits taking up enough of their time that they founded their own successful outfit, Team Parker Racing, in the late 1990s. Since then, the team has not only competed successfully at several marquee events, including the GT World Cup in Macau, the 24 Hours of Nürburgring, and the 24 Hours of Spa, but has also won races and championships in series as diverse as the British Touring Car Championship, British GT Championship, Porsche Carrera Cup GB, and 7 Race Series for Caterham cars.<br/><br/>Launching in 2021, Parker Classic Works takes the knowledge, expertise, and attention to detail that Stuart and Andy have applied to Team Parker Racing and returns it to the family roots, providing servicing, maintenance, and remedial works for a host of Porsches, outside of the latest 991 and 992 generation models, Caterhams, and other marques.<br/><br/>',
        },
        {
          url: 'caterham/svg/caterham_head.svg',
          title: 'History',
          content:
            'Growing up in the family garage, Stuart and Andy Parker quickly fell in love with the automotive world and when their father Geoff purchased a kart for the brothers to use as children, their interest in motorsport was born. Eventually persuading their dad to buy them a racing kart to compete with, the brothers loved every moment of competition, before branching out into their own areas of interest.<br/><br/>Andy loved Caterham Sevens and started racing in the series in 1995, while Stuart started in Class B of Formula Vauxhall Junior in 1996, with both cars still owned by the family and stored in their workshop to this day. Up against some rising stars, like Dan Wheldon and Luciano Burti, Stuart quickly realised he couldn’t compete at the very front of the field and, having decided to stop racing, was surprised when Ricky Flynn asked him to run one of his young drivers in the series, which he agreed to. A similar story happened with Andy in Caterhams, where other drivers said, “if you aren’t going to race anymore would you look after our cars?” and suddenly Team Parker Racing was born.<br/><br/> From racing their own Formula Vauxhall Junior and Caterham to running them for others, the brothers realised they could no longer work for their father and look after the race cars in the evening, branching out to their own workshop in 1999 and haven’t looked back since.<br/><br/> In the intervening years Team Parker Racing has competed in Formula 3, at the Nürburgring 24 Hours (where a class win and 11th place overall finish caused the organisers to ban Caterhams from the event!), has been a mainstay in the Porsche Carrera Cup GB, has a class win at the 24 Hours of Spa, is a British GT Championship Drivers’ and Teams’ champion, and is a race winner in the British Touring Car Championship.<br/><br/>In 2021, Andy and Stuart launched Parker Classic Works, blending their family heritage of a road car business with their knowledge, expertise, and love of motorsport, providing servicing, maintenance, and remedial works for a host of Porsches, outside of the latest 991 and 992 generation models, Caterhams, and other marques.<br/><br/>',
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
.about-content {
  border: 10px solid #5cb4e5;
  height: 500px;
}

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

.about-carousel {
  height: 1000px;
}

.about-img {
  height: 500px;
}

@media (min-width: 960px) {
  .about-carousel,
  .about-img {
    height: 600px;
  }
}
</style>
