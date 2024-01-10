<template>
  <v-card :flat="true" class="pa-4 pa-md-16" color="transparent">
    <v-container>
      <v-row align="center" justify="space-around">
        <v-col cols="12" md="6">
          <v-img
              alt="web design"
              class="elevation-5 rounded"
              height="300"
              src="@/assets/imgs/web_design-t-bg.png"
          />
        </v-col>

        <v-col cols="12" md="6">
          <h1 class="text-h5 mx-auto mb-4 font-weight-bold">
            Web Development
          </h1>

          <div class="text-h5 font-weight-regular">
            Our passion lies in user satisfaction, and it's what fuels our excitement for creating websites that
            seamlessly merge aesthetic appeal with functionality. Whether it's developing portfolios and informative
            pages or delving into full-scale web applications and immersive experiences, we love the diversity of
            projects we work on. <a class="link" href="/contact">Reach out to us!</a>
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
</style>
