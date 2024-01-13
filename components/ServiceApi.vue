<template>
  <v-card :flat="true" color="transparent">
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12" md="6">
          <h1 class="text-h5 text-center mx-auto mb-4 font-weight-bold bg-primary">
            API Backend & Frontend 🦾
          </h1>

          <div class="text-h5 text-left font-weight-regular">
            We specialize in full-stack development, seamlessly integrating backend, frontend, and API solutions for
            your digital goals. Our expertise lies in crafting robust backend architectures complemented by visually
            stunning frontends. Focused on efficient API development, we ensure smooth communication between system
            layers. Our approach guarantees a cohesive development journey.
          </div>
        </v-col>

        <v-col cols="12" md="6">
          <v-img
              :height="mdAndUp ? 300 : 150"
              alt="saas solutions"
              class="rounded elevation-5"
              src="@/assets/imgs/api-t-bg.png"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts" setup>
import {useDisplay} from "vuetify"

const {mdAndUp} = useDisplay()
</script>

<style lang="css" scoped>
.v-card {
  z-index: 3;
}
</style>
