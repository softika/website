<template>
  <v-card :flat="true" color="transparent">
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12" md="6">
          <h1 class="text-h5 text-center mx-auto mb-4 font-weight-bold bg-primary">
            SaaS ☁️
          </h1>

          <div class="text-h5 text-left font-weight-regular">
            We create custom SaaS solutions to enhance your business operations, combining technical expertise and
            creative problem-solving. Our collaborative approach ensures seamless integration of innovative technology,
            user-friendly interfaces, and scalability for your sustained success.
          </div>
        </v-col>

        <v-col cols="12" md="6">
          <v-img
              :height="mdAndUp ? 300 : 150"
              alt="saas development"
              class="rounded elevation-5"
              src="@/assets/imgs/saas-t-bg.png"
          />
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
