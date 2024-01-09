<template>
  <v-card :flat="true" class="pa-4 pa-md-16" color="transparent">
    <v-container>
      <v-row align="center" justify="space-between">
        <v-col cols="12" md="6">
          <h1 class="text-h5 mx-auto mb-4 font-weight-bold">
            API Backend & Frontend
          </h1>

          <div class="text-body-1 font-weight-bold">
            As a dynamic team specializing in full-stack development, we excel in seamlessly integrating backend,
            frontend, and API solutions to power your digital ambitions. Our expertise lies in the art of crafting
            robust backend architectures that form the backbone of your applications, complemented by visually stunning
            and intuitive frontends that captivate users. With a keen focus on building efficient APIs, we ensure smooth
            communication between different layers of your system. Whether you're envisioning a comprehensive web
            platform or a scalable application ecosystem, our collaborative and holistic approach guarantees a cohesive
            development journey.
          </div>

          <a class="link" href="/contact">Get started!</a>
        </v-col>

        <v-col cols="12" md="6">
          <v-img
              alt="saas solutions"
              class="rounded elevation-5"
              height="300"
              src="@/assets/imgs/api-t-bg.png"
          />
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
