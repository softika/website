<template>
  <v-card :flat="true" color="transparent">
    <v-container>
      <v-row align="center" justify="space-around">
        <v-col cols="12" md="6">
          <v-img
              alt="web design"
              class="elevation-5 rounded rotating"
              height="300"
              src="@/assets/imgs/web_design-t-bg.png"
          />
        </v-col>

        <v-col cols="12" md="5">
          <h1 class="text-h5 mx-auto mb-4 font-weight-bold">
            Web Design
          </h1>

          <div class="text-body-1 font-weight-bold">
            At the heart of our approach is a deep commitment to prioritizing user experience, underscoring our
            dedication to crafting websites that seamlessly blend functionality with aesthetic appeal. We understand
            that a beautiful site goes hand-in-hand with an intuitive and enjoyable user journey. Through meticulous
            design and user-centric development, we ensure that our websites not only captivate visually but also
            provide a delightful and meaningful experience for every user.
          </div>

          <a class="link" href="/contact">Reach out to us!</a>
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

.rotating {
  transition: transform 3s ease-in-out;
}

.rotating:hover {
  transform: rotateZ(360deg);
}
</style>
