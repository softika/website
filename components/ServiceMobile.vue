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
          <h1 class="text-h5 mx-auto mb-4 font-weight-bold pop-outin">
            Mobile Apps
          </h1>

          <div class="text-h5 font-weight-regular">
            We embark on a journey to build innovative, cross platform and user-friendly mobile solutions.
            Whether you're envisioning a cutting-edge app, a mobile app for your blog,
            or a business-critical mobile platform, our collaborative
            approach ensures that your project is perfectly aligned with your goals.
            <a class="link" href="/contact">Tell us more!</a>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts" setup>
</script>

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

.anima:hover {
  transform: rotate3d(.3, .866, 0, 15deg) rotate(-15deg);
}
</style>
