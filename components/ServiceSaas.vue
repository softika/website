<template>
  <v-card :flat="true" class="pa-4 pa-md-16" color="transparent">
    <v-container>
      <v-row align="center" justify="space-between">
        <v-col cols="12" md="6">
          <h1 class="text-h5 mx-auto mb-4 font-weight-bold">
            SaaS
          </h1>

          <div class="text-h5 font-weight-regular">
            We create custom SaaS solutions to enhance your business operations, combining technical expertise and
            creative problem-solving. Our collaborative approach ensures seamless integration of innovative technology,
            user-friendly interfaces, and scalability for your sustained success.
            <a class="link" href="/contact">Partner with us!</a>
          </div>
        </v-col>

        <v-col cols="12" md="6">
          <v-img
              alt="saas solutions"
              class="rounded elevation-5"
              height="300"
              src="@/assets/imgs/saas-t-bg.png"
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
