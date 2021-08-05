<template>
  <v-row justify="center" align="center" no-gutters>
    <v-col cols="12">
      <detail-head :head="detail.head" />
    </v-col>
    <v-col cols="12" class="primary white--text">
      <v-container class="text-center py-16">
        <p class="text-size py-8">
          In case you aren’t familiar, car detailing involves undertaking a
          deep, or detailed, clean of a car, accompanied with restoration of
          damaged panels or poor paintwork. This can be as simple as a light
          polish or as in-depth as wet sand surface removal but will vary from
          owner to owner.
          <br />
          <br />
          What Parker Classic Works can do for you
          <br />
          <br />
          The Parker Classic Works detailing team is led by Operations and
          Vehicle Cosmetic specialist Adam Davies, who is qualified in in
          Paintwork Polishing and Ceramic Coatings. The team uses high-quality
          SONAX car care products and can finish your car with wax, ceramic
          coating, or paint protection film, to provide a lasting look.
          <br />
          <br />
          Parker Classic Works is <strong>Precision. Delivered.</strong>
        </p>
      </v-container>
    </v-col>
    <v-col cols="12">
      <detail-mid :mid="detail.mid" />
    </v-col>
    <v-col cols="12">
      <detail-steps></detail-steps>
    </v-col>
    <v-col cols="12">
      <detail-mid :mid="detail.bottom" />
    </v-col>
    <v-col cols="12" class="primary py-10">
      <section-contact
        :btn-color="btnColor"
        :title="title"
        :subject="subject"
      />
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    detail: {
      head: {
        url: 'detail/Wash.png',
        title: 'Detailing',
      },
      mid: {
        url: 'detail/Polish.png',
      },
      bottom: {
        url: 'detail/SONAX_XTREME.png',
      },
    },
    title:
      'Contact us to talk further about how we can get your car looking concourse ready:',
    btnColor: 'secondary',
    subject: 'detailing',
  }),
}
</script>
