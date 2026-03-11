<script lang="ts" setup>
useSeoMeta({
  title: 'Imprint — Legal Information | Softika',
  description: 'Legal information and company details for Softika Software Development e.U., Vienna, Austria.',
  ogTitle: 'Imprint | Softika',
  ogDescription: 'Legal information for Softika Software Development e.U.',
  ogType: 'website',
  ogUrl: 'https://www.softika.dev/imprint/',
  ogSiteName: 'Softika',
  robots: 'noindex, follow',
})

useHead({
  link: [{rel: 'canonical', href: 'https://www.softika.dev/imprint/'}],
})
</script>

<template>
  <v-row align="center" class="py-16" justify="center">
    <v-col cols="12">
      <div class='text-h4 text-center font-bold'>
        This website is owned by:
      </div>
    </v-col>
    <v-col cols="12">
      <div class='text-h4 text-center font-weight-bold'>
        Softika Software Development e.U.
      </div>
    </v-col>
  </v-row>
  <v-row align="center" justify="center">
    <v-col cols="12">
      <div class='text-h6 font-bold text-center'>
        Address:&nbsp;<a class="text-cyan-darken-4" href="https://maps.app.goo.gl/dBSUksT7nKsWai9B8" target="_blank">
        Baumgasse 71/8, 1030 Vienna, Austria
      </a>
      </div>
      <div class='text-h6 font-bold text-center'>
        FN:&nbsp;622205 h
      </div>
      <div class='text-h6 font-bold text-center'>
        UID-Nr:&nbsp;ATU80464819
      </div>
      <div class='text-h6 font-bold text-center'>
        Email:&nbsp;<a class="text-cyan-darken-4" href="mailto:office@softika.dev" target="_blank">
        office@softika.dev
      </a>
      </div>
    </v-col>
    <v-col cols="12">

    </v-col>
    <v-col cols="12">
      <MyBanner bg-variation="var2"/>
    </v-col>
  </v-row>
</template>

<style lang="css" scoped>

</style>
