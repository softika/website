<script lang="ts" setup>
import MyBanner from "~/components/MyBanner.vue";
// Utilities
import {useDisplay} from 'vuetify'

const {mdAndUp} = useDisplay()
</script>

<template>
  <v-row class="py-16" justify="center">
    <v-col cols="12">
      <MyBanner
          title="A programming duo with three decades of combined expertise."
      />
    </v-col>
  </v-row>
  <v-row justify="center">
    <v-col cols="12" lg="6" md="6" sm="12">
      <v-card border="0" color="transparent" elevation="0">
        <v-row class="text-center" justify="center" no-gutters>
          <v-col cols="12">
            <v-avatar :size="mdAndUp ? 300 : 150" image="@/assets/imgs/filip.jpeg"/>
          </v-col>
          <v-col cols="12">
            <v-card-text class="d-flex flex-column justify-center h-100">
              <v-row class="text-center" justify="center">
                <v-col cols="12">
                  <h3 class="text-center text-lg-h3 text-h4 font-weight-bold mb-4">
                    Filip
                  </h3>
                  <span class="text-h5 text-center text-grey-darken-1"><b>Full-Stack Developer</b></span>
                  <br><br>
                  <div class="text-justify text-grey-darken-1 text-h6 font-weight-regular">
                    With a rich tapestry of 15 years programming, Filip is a professional who is
                    proficient in a myriad of programming languages, with a special affinity for GO and Java. His true
                    joy lies in
                    the complete coding process, from conceptual design through to meticulous implementation.
                    As a dedicated and passionate individual, he brings a wealth of
                    expertise to any project, ensuring that every line of code reflects genuine love for the craft.
                  </div>
                </v-col>
              </v-row>
              <v-row class="text-center" justify="center">
                <v-col>
                  <v-btn color="blue-darken-4"
                         href="https://www.linkedin.com/in/fmiskovic/"
                         icon="mdi-linkedin"
                         target="_blank"/>
                  <span>&nbsp;&nbsp;&nbsp;</span>
                  <v-btn color="black"
                         href="https://github.com/fmiskovic"
                         icon="mdi-github"
                         target="_blank"/>
                </v-col>
              </v-row>
            </v-card-text>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
    <v-col cols="12" lg="6" md="6" sm="12">
      <v-card border="0" color="transparent" elevation="0">
        <v-row class="text-center" justify="center" no-gutters>
          <v-col cols="12">
            <v-avatar :size="mdAndUp ? 300 : 150" image="@/assets/imgs/nikola.jpeg"/>
          </v-col>
          <v-col cols="12">
            <v-card-text class="d-flex flex-column justify-center h-100">
              <v-row class="text-center" justify="center">
                <v-col cols="12">
                  <h3 class="text-center text-lg-h3 text-h4 font-weight-bold mb-4">
                    Nikola
                  </h3>
                  <span
                      class="text-h5 text-center text-grey-darken-1"><b>Full-Stack & Mobile Developer</b></span>
                  <br><br>
                  <div class="text-justify text-grey-darken-1 text-h6 font-weight-regular">
                    Armed with 16 years of hands-on experience, Nikola is a
                    seasoned Full-stack and Mobile Engineer. Throughout his career, he has been at the forefront of
                    technological advancements, contributing to the development and success of diverse projects. His
                    expertise encompasses the entire software development lifecycle, from concept to deployment. With a
                    keen eye for detail, he is dedicated to deliver cutting-edge solutions that exceed expectations.
                  </div>
                </v-col>
              </v-row>

              <v-row class="text-center" justify="center">
                <v-col>
                  <v-btn color="blue-darken-4"
                         href="https://www.linkedin.com/in/nikpetrovicin/"
                         icon="mdi-linkedin"
                         target="_blank"/>
                  <span>&nbsp;&nbsp;&nbsp;</span>
                  <v-btn color="black"
                         href="https://github.com/nikpetrovic"
                         icon="mdi-github"
                         target="_blank"/>
                </v-col>
              </v-row>
            </v-card-text>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
  <v-row class="py-16" justify="center">
    <v-col cols="12">
      <MyBanner
          bg-variation="var4"
          button-icon="mdi-chat-outline"
          button-text=" Let's talk"
          route-path="/contact"
          text="You are at the right place!"
          title="Need an expert for your project?"
      />
    </v-col>
  </v-row>
</template>
