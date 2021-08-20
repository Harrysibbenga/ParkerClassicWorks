<template>
  <v-row justify="center" align="center" no-gutters>
    <v-col cols="12">
      <detail-head :head="detail.head" />
    </v-col>
    <v-col cols="12" class="primary white--text">
      <v-container class="text-center py-16">
        <p class="text-size py-8">
          Trackstar provides a Thatcham approved, robust, AI based, industry
          leading system, which is fully police and insurance endorsed,
          protecting owners’ vehicles against theft. Indeed, the company has
          direct links to all police constabularies in the UK, meaning staff,
          who work 24 hours a day, 365 days a year, can quickly alert the
          authorities when they notice unusual activity around customer’s
          vehicles.
          <br />
          <br />
          The S5 and S7 products work seamlessly with the My Trackstar app for
          both iOS and Android devices so users can stand down alarms, report
          thefts, manage accounts, and view past journeys. In addition, the
          AI-based TARA (Trackstar Automated Response Assistant) monitors for
          potential signs of vehicle theft and contacts owners to clarify if
          their vehicle is accounted for.
          <br />
          <br />
          Speak to a member of the team to discuss whether Trackstar vehicle
          protection is right for you.
          <br />
          <br />
          Parker Classic Works is <strong>Precision. Delivered.</strong>
        </p>
      </v-container>
    </v-col>
    <v-col cols="12" class="white">
      <v-container>
        <v-row>
          <v-col cols="12" class="py-16">
            <detail-mid :mid="detail.mid" :height="'500px'" />
          </v-col>
        </v-row>
      </v-container>
    </v-col>
    <v-col cols="12" class="primary">
      <v-container>
        <v-row>
          <v-col cols="12" class="py-10">
            <detail-video :video="video"></detail-video>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
    <v-col cols="12">
      <detail-mid :mid="detail.bottom" />
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    detail: {
      head: {
        url: 'trackstar/F80P0195.png',
        title: 'Trackstar',
      },
      mid: {
        url: 'trackstar/Trackstar App visuals.png',
      },
      bottom: {
        url: 'trackstar/MALK5894.png',
      },
    },
    video: 'https://www.youtube.com/embed/Euz4otrudZc',
  }),
}
</script>
