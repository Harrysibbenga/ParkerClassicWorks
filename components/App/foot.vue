<template>
  <v-footer class="white--text primary pa-0 mt-5">
    <v-container fluid class="pa-0">
      <v-row no-gutters>
        <v-col cols="12" class="white">
          <section-map></section-map>
        </v-col>
        <v-col cols="12" class="secondary">
          <section-contact></section-contact>
        </v-col>
        <v-col cols="12" class="white">
          <section-partners></section-partners>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col cols="12">
          <h2 class="text-h2 text-center font-weight-bold py-8">
            Precision. Delivered.
          </h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="8">
          <h3 class="pb-5">About Parker Classic Works</h3>
          <p>
            Parker Classic Works continues a long family tradition, as the
            Parker family has been synonymous with car sales and servicing in
            the Midlands going back to 1920 when Albert Parker first opened his
            garage in Nuneaton. His son, Reg, served an apprenticeship with
            Daimler before joining his father and the custom continued with a
            third generation of Parker, Geoff, who joined in the family
            business.<br /><br />

            Andy and Stuart, sons of Geoff, also worked at the family garage but
            as their own passion for motorsport blossomed into a growing
            business, Team Parker Racing. The brothers now bring their lifetime
            of experience working on both road and racing cars to their new
            venture, Parker Classic Works.
          </p>
        </v-col>
        <v-col cols="12" md="4" class="text-center">
          <h3>Follow us</h3>
        </v-col>
      </v-row>
      <v-row>
        <span class="mx-auto pa-4 mt-3"
          >&copy; Torque Motorsport Limited {{ new Date().getFullYear() }}</span
        >
      </v-row>
    </v-container>
  </v-footer>
</template>
