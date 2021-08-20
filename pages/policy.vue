<template>
  <v-row justify="center" align="center" no-gutters>
    <v-col cols="12">
      <detail-head :head="detail.head" />
    </v-col>
    <v-col cols="12" class="primary white--text">
      <v-container class="py-16">
        <p class="text-size py-8">
          <strong>Our privacy policy</strong>
          <br />
          We do not share any personal information we collect on you with any
          other organisations or individuals.
          <br />
          <br />
          We keep all information you provide to us completely confidential, no
          matter how or why you provide it.
          <br />
          <br />
          Only those employees and contractors we specifically employ with
          relevant business duties may access personal information, and only to
          perform their duties. They are strictly prohibited from any other use.
          <br />
          <br />
          No personal information will be provided to any third party, except
          for in the unusual event that we are required to do so by law.
          <br />
          <br />
          By using any of the forms on our website, you implicitly agree to be
          bound by our privacy policy and legal disclaimer. By using any of the
          forms on our website you agree to have your email address added to our
          mailing list.
          <br />
          <br />
          You may receive periodic mailings from us with information on services
          or news. If you do not wish to receive such mailings, please let us
          know by contacting us. All emails sent will give you the option to
          unsubscribe.
          <br />
          <br />
          We take all reasonable precautions to protect any personal data that
          our users may input via this website. We cannot, however, be
          responsible for loss or misuse of personal data which is intercepted
          or otherwise accessed by unauthorised persons. We therefore exclude
          all liability for this.
          <br />
          <br />
          We are committed to complying with EU and U.K. data protection laws to
          the extent that they apply to our use of personal information.
          <br />
          <br />
          You have the right to ask us for a copy of your personal data and have
          the right to amend or delete the data.
          <br />
          <br />
          <strong>Your right to know</strong>
          <br />
          You can find contact details for our company representative can be
          found at the bottom of this page.
          <br />
          <br />
          By providing your contact details, you are giving us your consent to
          use your personal data for periodic mailings. You may receive periodic
          mailings from us with information on services or news. If you do not
          wish to receive such mailings, please let us know by contacting us.
          All emails we send to you will give you the option to unsubscribe. We
          will retain your data until you instruct us to remove it or decide to
          unsubscribe from our newsletter. Your personal data might be accessed
          by web developers and other contractors.
          <br />
          <br />
          Your personal data will be stored until you tell us otherwise. In case
          you would like to exercise any of your GDPR related rights (the right
          to access, rectification, erasure, restriction of processing and right
          to data portability) please contact us via email or contact us form
          that can be found at the bottom of this page.
          <br />
          <br />
          You have the right to lodge a complaint with the supervisory
          authority. It is not contractually binding to provide us with your
          personal data to receive a newsletter from us. We will not use
          personal data provided via the sign-up form for any other purpose than
          described above.
          <br />
          <br />
          <strong>Cookies and tracking</strong>
          <br />
          To improve the overall experience of visiting our website, we use a
          server-based log to collect anonymous information about our website
          visitors. This data is only used to generate statistical charts and
          will not be used in any other way.
          <br />
          <br />
          <strong>Use of Cookies on our website</strong>
          <br />
          By using this site, you have given us consent to use cookies. Cookies
          are small text files that are stored on your computer when you visit a
          website. They are mainly used as a way of improving the website
          functionalities or to provide more advanced statistical data.
          <br />
          <br />
          <strong>Google Analytics</strong>
          <br />
          Our website uses Google Analytics which relies on cookies to generate
          more advanced visitor charts and data mining reports. Similar to our
          server-based logs, Google Analytics collects anonymous information
          that will not be used to identify our website visitors.
          <br />
          <br />
          <strong>Controlling Cookies</strong>
          <br />
          Your web browser (the software you use to access our website) should
          allow you to control the cookies that it stores on your computer.
          Please refer to the relevant supplier’s website to find out more. If
          you feel that this site is not following its stated information
          policy, you may contact us by phone, email, or post.
          <br />
          <br />
          <strong>Changes to this policy</strong>
          <br />
          We will post any changes to this policy on our website. Those changes
          will then apply to any future use by you of our website.
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
  </v-row>
</template>

<script>
export default {
  data: () => ({
    detail: {
      head: {
        url: 'policy/_MG_9945.png',
        title: 'Privacy Policy',
      },
      mid: {
        url: 'policy/MALC3467.png',
      },
    },
  }),
}
</script>
