<template>
  <v-row justify="center" align="center" no-gutters>
    <v-col cols="12">
      <detail-head :head="detail.head" />
    </v-col>
    <v-col cols="12" class="primary white--text">
      <v-container class="text-center py-16">
        <p class="text-size py-8">
          HRE designs, engineers, and manufactures 1-piece, 2-piece with FMR™
          (Forged Monoblok Rim), and 3-piece forged as well as cast FlowForm®
          aluminum alloy wheels for Racing, Performance, Luxury cars &amp; SUVs.
          HRE’s build-to-order forged wheels offer a customized choice of
          offsets, widths, and finishes, resulting in a uniquely personal style
          and performance solution for each customer’s application.
          <br />
          <br />
          Since 2006, its 1-Piece Forged Monoblok wheels have been the industry
          standard for beautiful design and lightweight optimisation, while
          utilising its proprietary one-piece forged barrel, it has created the
          finest 2-Piece FMR® wheels in the world by increasing strength and
          reducing weight.
          <br />
          <br />
          Its Forged 3-Piece wheels span almost four decades of excellence and
          innovation with unmatched style and customisation options, and its
          FlowForm® wheels are cast designs stretched to a flow formed profile
          and thickness resulting in forged-like strength at a more accessible
          price point.
          <br />
          <br />
          Speak to a member of the team to discuss whether Akrapovič products
          are right for you.
          <br />
          <br />
          Parker Classic Works is <strong>Precision. Delivered.</strong>
        </p>
      </v-container>
    </v-col>
    <v-col cols="12">
      <detail-mid :mid="detail.mid" />
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
        url: 'hre/1.png',
        title: 'HRE Performance wheels',
      },
      mid: {
        url: 'hre/2.png',
      },
      bottom: {
        url: 'hre/3.png',
      },
    },
    video: 'https://www.youtube.com/embed/gO81bFgqSOQ',
  }),
}
</script>
