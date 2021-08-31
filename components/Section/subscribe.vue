<template>
  <v-row>
    <v-col cols="12">
      <h3 class="text-h6 mx-auto pb-3">Newsletter Sign up:</h3>
    </v-col>
    <v-col cols="12">
      <!-- Begin Mailchimp Signup Form -->
      <form
        id="mc-embedded-subscribe-form"
        action="https://torquetogether.us16.list-manage.com/subscribe/post?u=1e04e4b66dd0582c8dfc304e8&amp;id=865b1f7bac"
        method="post"
        name="mc-embedded-subscribe-form"
        class="validate row flex-center no-gutters align-center justify-center"
        target="_blank"
        novalidate
      >
        <v-col cols="12" md="10">
          <v-text-field
            id="mce-EMAIL"
            v-model="email"
            type="email"
            value=""
            name="EMAIL"
            tile
            solo
            class="rounded-0"
            :height="'50px'"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="2">
          <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
          <div style="position: absolute; left: -5000px" aria-hidden="true">
            <input
              type="text"
              name="b_1e04e4b66dd0582c8dfc304e8_865b1f7bac"
              tabindex="-1"
              value=""
            />
          </div>
          <div class="clear">
            <v-btn
              id="mc-embedded-subscribe"
              :height="'50px'"
              tile
              color="secondary"
              type="submit"
              name="subscribe"
              class="button mt-n10 mt-md-n9"
              :disabled="email == ''"
              >Subscribe</v-btn
            >
          </div>
        </v-col>
        <v-col cols="12">
          <div id="mce-responses" class="clear">
            <div
              id="mce-error-response"
              class="response"
              style="display: none"
            ></div>
            <div
              id="mce-success-response"
              class="response"
              style="display: none"
            ></div>
          </div>
        </v-col>
      </form>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      email: '',
    }
  },
  methods: {
    subscribe() {
      this.email = ''
      this.subscribed = true
    },
  },
}
</script>
