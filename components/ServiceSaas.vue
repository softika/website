<template>
  <v-card :flat="true" class="pa-4 pa-md-16" color="transparent">
    <v-container>
      <v-row align="center" justify="space-between">
        <v-col cols="12" md="5">
          <h1 class="text-h5 mx-auto mb-4 font-weight-bold">
            SaaS
          </h1>

          <div class="text-body-1 font-weight-bold">
            We specialize in crafting bespoke SaaS solutions tailored to elevate your business operations. With a
            passion for innovation and a commitment to excellence, we bring a unique blend of technical expertise and
            creative problem-solving to every project. Our collaborative approach ensures that each SaaS solution we
            build not only meets but exceeds your expectations, providing a seamless integration of cutting-edge
            technology, user-friendly interfaces, and scalability to drive your business towards sustained success.
          </div>

          <a class="link" href="/contact">Partner with us!</a>
        </v-col>

        <v-col cols="12" md="6">
          <v-img
              alt="saas solutions"
              class="rounded elevation-10"
              height="300"
              src="@/assets/imgs/saas-t-bg.png"
          />
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
