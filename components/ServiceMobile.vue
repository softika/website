<template>
  <v-card :flat="true" color="transparent">
    <v-container>
      <!-- on mobile devices -->
      <v-row v-if="smAndDown" align="center" justify="center">
        <v-col cols="12" sm="12">
          <h1 class="text-h5 text-center mx-auto mb-4 font-weight-bold h1-txt">
            Mobile Apps
          </h1>

          <div class="text-h5 text-center font-weight-regular">
            We embark on a journey to build innovative, cross platform and user-friendly mobile solutions.
            Whether you're envisioning a cutting-edge app, a mobile app for your blog,
            or a business-critical mobile platform, our collaborative
            approach ensures that your project is perfectly aligned with your goals.
          </div>
        </v-col>
        <v-col cols="12" sm="12">
          <v-img
              alt="web design"
              class="elevation-5 rounded"
              height="150"
              src="@/assets/imgs/mobile-t-bg.png"
          />
        </v-col>
      </v-row>

      <!-- on laptop or desktop -->
      <v-row v-if="mdAndUp" align="center" justify="center">
        <v-col cols="12" md="6">
          <v-img
              alt="mobile apps"
              class="elevation-5 rounded"
              height="300"
              src="@/assets/imgs/mobile-t-bg.png"
          />
        </v-col>

        <v-col cols="12" md="6">
          <h1 class="text-h5 text-center mx-auto mb-4 font-weight-bold h1-txt">
            Mobile Apps
          </h1>

          <div class="text-h5 text-center font-weight-regular">
            We embark on a journey to build innovative, cross platform and user-friendly mobile solutions.
            Whether you're envisioning a cutting-edge app, a mobile app for your blog,
            or a business-critical mobile platform, our collaborative
            approach ensures that your project is perfectly aligned with your goals.
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts" setup>
import {useDisplay} from "vuetify"

const {mdAndUp, smAndDown} = useDisplay()
</script>

<style lang="css" scoped>
.v-card {
  z-index: 3;
}
</style>
