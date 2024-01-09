<template>
  <v-card :flat="true" class="pa-4 pa-md-16" color="transparent">
    <v-container>
      <v-row align="center" justify="space-around">
        <v-col cols="12" md="6">
          <v-img
              alt="mobile apps"
              class="elevation-5 rounded"
              height="300"
              src="@/assets/imgs/mobile-t-bg.png"
          />
        </v-col>

        <v-col cols="12" md="6">
          <h1 class="text-h5 mx-auto mb-4 font-weight-bold">
            Mobile Apps
          </h1>

          <div class="text-body-1 font-weight-bold">
            We embark on a journey to build innovative, cross platform and user-friendly mobile solutions.
            Whether you're envisioning a cutting-edge app, an immersive mobile game,
            or a business-critical mobile platform, our collaborative
            approach ensures that your project is not only meticulously developed but also perfectly aligned with your
            unique goals.
          </div>

          <a class="link" href="/contact">Tell us more!</a>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts" setup/>

<style lang="css" scoped>
.v-card {
  z-index: 3;
}

a {
  display: block;
}

.link {
  cursor: pointer;
  position: relative;
  width: max-content;
  z-index: 2 !important;
  color: black;
}

.link:hover {
  background-color: #e04050;
  opacity: 0.8;
  transition: 2s;
}
</style>
