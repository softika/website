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
            <v-avatar :size="mdAndUp ? 300 : 150" elevation="12">
              <v-img alt="Filip Miskovic" src="@/assets/imgs/filip-t-bg.png"/>
            </v-avatar>
          </v-col>
          <v-col cols="12">
            <v-card-text class="d-flex flex-column justify-center h-100">
              <v-row class="text-center" justify="center">
                <v-col cols="12">
                  <h3 class="text-center text-lg-h3 text-h4 font-weight-bold mb-4">
                    Filip
                  </h3>
                  <span class="text-h6 text-center text-grey-darken-1"><b>Full-Stack Developer</b></span>
                  <div class="text-center text-medium-emphasis">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et
                    dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea
                    commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit
                    anim id
                    est laborum.
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
            <v-avatar :size="mdAndUp ? 300 : 150" elevation="12">
              <v-img alt="Nikola Petrovic" src="@/assets/imgs/nikola-t-bg.png"/>
            </v-avatar>
          </v-col>
          <v-col cols="12">
            <v-card-text class="d-flex flex-column justify-center h-100">
              <v-row class="text-center" justify="center">
                <v-col cols="12">
                  <h3 class="text-center text-lg-h3 text-h4 font-weight-bold mb-4">
                    Nikola
                  </h3>
                  <span class="text-h6 text-center text-grey-darken-1"><b>Full-Stack & Mobile Developer</b></span><br>
                  <div class="text-center text-medium-emphasis">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et
                    dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea
                    commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit
                    anim id
                    est laborum.
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
          bg-variation="var2"
          button-icon="mdi-chat-outline"
          button-text=" Let's talk"
          route-path="/contact"
          text="You are at the right place!"
          title="Need an expert for your project?"
      />
    </v-col>
  </v-row>
</template>
