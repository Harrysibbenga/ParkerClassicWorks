<template>
  <v-footer class="white--text primary pa-0">
    <v-container fluid class="pa-0">
      <v-row no-gutters>
        <v-col cols="12" class="white">
          <section-map></section-map>
        </v-col>
        <v-col id="contact" cols="12" class="secondary py-16">
          <section-contact
            class="py-16"
            :title="'GET IN TOUCH'"
            :map="true"
          ></section-contact>
        </v-col>
        <v-col cols="12" class="white">
          <section-partners></section-partners>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <h2 class="text-h2 text-center font-weight-bold py-10">
            Precision. Delivered.
          </h2>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="12" md="4">
          <h3 class="pb-10 text-h5">
            Your Leicestershire based Porsche and Caterham specialists
          </h3>
          <p class="font-size-small">
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
          <section-subscribe class="pt-10"></section-subscribe>
          <v-row
            align="center"
            justify="space-around"
            style="width: 300px"
            class="mx-auto mt-10 mt-md-0"
          >
            <a class="text-decoration-none white--text">Careers</a>
            <v-divider vertical color="white"></v-divider>
            <a class="text-decoration-none white--text">Privacy Policy</a>
          </v-row>
        </v-col>
        <v-col cols="12" md="4" class="text-center">
          <h3 class="text-h5 mt-10 mt-md-0">Follow us:</h3>
          <v-container style="width: 200px">
            <v-row class="mb-2">
              <v-col cols="6">
                <div class="text-right">
                  <div class="my-3">
                    <p class="my-auto">Instagram</p>
                  </div>
                  <div class="my-6">
                    <p class="my-auto">LinkedIn</p>
                  </div>
                  <div class="my-3">
                    <p class="my-auto">Facebook</p>
                  </div>
                  <div class="my-6">
                    <p class="my-auto">Twitter</p>
                  </div>
                </div>
              </v-col>
              <v-col cols="6">
                <div class="text-center">
                  <div class="my-2">
                    <v-btn
                      color="white"
                      small
                      class="primary--text"
                      fab
                      href="http://instagram.com/parkerclassicworks/"
                      target="_blank"
                    >
                      <v-icon>mdi-instagram</v-icon>
                    </v-btn>
                  </div>
                  <div class="my-2">
                    <v-btn
                      color="white"
                      small
                      class="primary--text"
                      fab
                      href="http://linkedin.com/company/parkerclassicworks"
                      target="_blank"
                    >
                      <v-icon>mdi-linkedin</v-icon>
                    </v-btn>
                  </div>
                  <div class="my-2">
                    <v-btn
                      color="white"
                      small
                      class="primary--text"
                      fab
                      href="http://facebook.com/ParkerClassicWorks"
                      target="_blank"
                    >
                      <v-icon>mdi-facebook</v-icon>
                    </v-btn>
                  </div>
                  <div class="my-2">
                    <v-btn
                      color="white"
                      small
                      class="primary--text"
                      fab
                      href="http://twitter.com/Parker_Works"
                      target="_blank"
                    >
                      <v-icon>mdi-twitter</v-icon>
                    </v-btn>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
      <section-affiliates></section-affiliates>
      <v-row>
        <span class="mx-auto pa-5 mt-3"
          >&copy; Torque Motorsport Limited {{ new Date().getFullYear() }}</span
        >
      </v-row>
    </v-container>
  </v-footer>
</template>
