<script lang='ts' setup>
import Features from "~/components/Features.vue";
</script>

<template>
  <v-container :fluid="true">
    <v-row align="center" class="py-16" justify="center">
      <v-col class="text-center" cols="12" md="6">
        <h1 class="text-h3 mb-4">
          <strong class="text-primary">AI</strong>
          <br>
          Powered
          <br>
          <strong class="text-primary">Music</strong>
          <br>Production
        </h1>

        <div class="text-medium-emphasis text-body-1 mb-12">
          Compose and share your art.
        </div>

        <v-btn color="primary" size="large" @click.stop="$router.push('/contact')">Get Started for Free</v-btn>
      </v-col>

      <v-col cols="12" md="6">
        <!--        <img alt="a placeholder" class="d-none d-md-block" src="@/assets/img/wave.png"/>-->
      </v-col>
    </v-row>
    <v-row align="center" class="py-16 px-0 bg-primary" justify="center">
      <v-col cols="12" md="6">
        <div class='text-h2 text-center font-weight-bold pt-2'>
          Dive into the Future of Music Composition with AI Generative Brilliance
        </div>
      </v-col>
    </v-row>
    <v-row align="center" class="py-16 px-12 bg-primary" justify="center">
      <v-col cols="12">
        <Features/>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang='sass'>
</style>
