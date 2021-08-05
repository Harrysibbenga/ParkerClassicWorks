<template>
  <v-container fluid class="pa-0">
    <v-row no-gutters>
      <v-col cols="12">
        <service-head :head="post.head"></service-head>
      </v-col>
      <v-col cols="12" class="primary white--text">
        <v-container class="text-center py-16">
          <p class="text-size py-8">
            Understanding that being a custodian of a classic Porsche is more
            than just owning another car, Parker Classic Works provides
            all-encompassing, high quality, and bespoke technical service in the
            Midlands. Each car is treated as unique and special, and owners are
            offered high-quality services with a direct and friendly experience.
            <br />
            <br />
            Through specialist and unique experience, drawing on more than 20
            years of professional motorsport success and prestige manufacturer
            knowledge, the team offers a range of services for Porsche motorcars
            over ten years old, from date of manufacture. Please see below for
            the range of services offered.
          </p>
        </v-container>
      </v-col>
      <v-col cols="12">
        <service-mid :mid="post.mid"></service-mid>
      </v-col>
      <v-col cols="12" class="primary">
        <service-services :services="post.services"></service-services>
      </v-col>
      <v-col cols="12">
        <service-mid :mid="post.mid2"></service-mid>
      </v-col>
      <v-col cols="12">
        <service-booking></service-booking>
      </v-col>
      <v-col cols="12">
        <service-mid :mid="post.mid3"></service-mid>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      post: {
        head: {
          url: 'porsche/MALK5257.png',
          title: 'Porcshe',
          position: 'left',
        },
        mid: {
          url: 'porsche/IMG_3569.jpg',
        },
        mid2: {
          url: 'porsche/MALK4363COMP.png',
        },
        mid3: {
          url: 'porsche/MALK5791.png',
        },
        services: [
          {
            url: 'caterham/icons/servicing.svg',
            title: 'Servicing',
            text: 'Parker Classic Works offers a range of servicing packages. These include full annual service, minor service, major service, and seasonal packages to ensure your vehicle is road ready whatever the climactic conditions.',
          },
          {
            url: 'caterham/icons/mot.svg',
            title: 'MOT',
            text: 'The team can not only provide an MOT at competitive pricing, but also offers a pre-MOT check to ensure your vehicle is ready, to avoid costly re-tests.',
          },
          {
            url: 'caterham/icons/repairs.svg',
            title: 'Repairs',
            text: 'Parker Classic Works can undertake a wide range of repairs for your Porsche, including engine and gearbox rebuilds, utilising all new parts and providing an as-new finish.',
          },
          {
            url: 'caterham/icons/fault_diag.svg',
            title: 'Fault Diagnostics',
            text: 'If your Porsche is displaying an error code, book a visit to Parker Classic Works, which can utilise its diagnostic software to get to the bottom of what is ailing your car.',
          },
          {
            url: 'caterham/icons/recomission.svg',
            title: 'Recomissioning',
            text: 'No matter if your classic Porsche has been on the road or sitting in storage for some time, as the Parker Classic Works team will offer a full health check on your machine, which will lead to a planned and agreed package of work to recommission it back to its full glory.',
          },
          {
            url: 'caterham/icons/storage.svg',
            title: 'Storage',
            text: 'Keep your Porsche is a secure, dry, environmentally stable location, to ensure it remains in tip-top condition. The Parker Classic Works team is also able to offer car covers, battery conditioners, periodic start up, and regular washes, so all you have to do is arrive and enjoy your car.',
          },
          {
            url: 'caterham/icons/paint.svg',
            title: 'Paint',
            text: 'The finish of your Porsche is as important to the Parker Classic Works team as it is to you as an owner. Full care and attention is given to your car, with full cleaning and detailing using SONAX products, before any repairs and resprays are undertaken.',
          },
          {
            url: 'caterham/icons/trim.svg',
            title: 'Trim',
            text: 'Down to the smallest areas of trim on your Porsche, the Parker Classic Works team is dedicated to ensuring repairs and complete re-trims are conducted and completed to the highest possible standards.',
          },
          {
            url: 'caterham/icons/track_prep.svg',
            title: 'Track Preparation',
            text: 'If required, the Parker Classic Works team can utilise its decades of motorsport experience to set your Porsche up for track days. However, the team is not able to offer full trackside support.',
          },
          {
            url: 'caterham/icons/health_check.svg',
            title: 'Health Check',
            text: 'The experienced team at Parker Classic Works will conduct an in-depth appraisal of your classic Caterham, following a 120+ point check of every aspect of your car with full documentation and certificates.',
          },
        ],
      },
    }
  },
}
</script>
