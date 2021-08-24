<template>
  <v-row justify="center" align="center" no-gutters>
    <v-col cols="12">
      <detail-head :head="detail.head" />
    </v-col>
    <v-col cols="12" class="primary white--text">
      <v-container class="text-center py-16">
        <p class="text-size py-8">
          A pioneer in its field, Akrapovič’s premium exhaust systems are
          designed and manufactured for performance cars by a passionate and
          highly skilled workforce of over 1000 employees at its
          state-of-the-art factories in Slovenia, which include an in-house
          titanium foundry and metallurgical laboratory, using the latest
          technology, processes, and finest materials.
          <br />
          <br />
          Understanding that customers own highly prized and treasured vehicles,
          the team at Parker Classic Works has been working hard to partner with
          only the most trusted brands on the market and is pleased to be
          working with Akrapovič to provide its exhaust systems.
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
    <v-col cols="12" class="white">
      <v-container>
        <v-row>
          <v-col cols="12">
            <detail-mid :mid="detail.mid" />
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
        url: 'akrapovic/4abb188a-f6bf-4274-8f81-5b8687addbda.jpg',
        title: 'AKRAPOVIč',
      },
      mid: {
        url: 'akrapovic/4095c03f-b491-47eb-a766-5305ca90fe2d.png',
      },
      bottom: {
        url: 'akrapovic/68688388-4a50-4964-b314-a540b3d38361.png',
      },
    },
    video: 'https://www.youtube.com/embed/gd-gL3y5rI0',
  }),
}
</script>
