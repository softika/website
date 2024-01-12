<template>
  <v-card :flat="true" color="transparent">
    <v-container>
      <!-- on mobile devices -->
      <v-row v-if="smAndDown" align="center" justify="center">
        <v-col cols="12" sm="12">
          <h1 class="text-h5 text-center mx-auto mb-4 font-weight-bold h1-txt">
            Web Development
          </h1>

          <div class="text-h5 text-left font-weight-regular">
            Our passion lies in user satisfaction, and it's what fuels our excitement for creating websites that
            seamlessly merge aesthetic appeal with functionality. Whether it's developing portfolios and informative
            pages or delving into full-scale web applications and immersive experiences, we love the diversity of
            projects we work on.
          </div>
        </v-col>
        <v-col cols="12" sm="12">
          <v-img
              alt="web design"
              class="elevation-5 rounded"
              height="150"
              src="@/assets/imgs/web_design-t-bg.png"
          />
        </v-col>
      </v-row>

      <!-- on laptop or desktop -->
      <v-row v-if="mdAndUp" align="center" justify="center">
        <v-col cols="12" md="6">
          <v-img
              alt="web design"
              class="elevation-5 rounded"
              height="300"
              src="@/assets/imgs/web_design-t-bg.png"
          />
        </v-col>

        <v-col cols="12" md="6">
          <h1 class="text-h5 text-center mx-auto mb-4 font-weight-bold h1-txt">
            Web Development
          </h1>

          <div class="text-h5 text-left font-weight-regular">
            Our passion lies in user satisfaction, and it's what fuels our excitement for creating websites that
            seamlessly merge aesthetic appeal with functionality. Whether it's developing portfolios and informative
            pages or delving into full-scale web applications and immersive experiences, we love the diversity of
            projects we work on.
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
