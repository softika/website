<script lang="ts" setup>
// Utilities
import {useDisplay} from 'vuetify'
import Content from "~/components/Content.vue"

const {mdAndUp} = useDisplay()
</script>

<template>
  <v-container :fluid="true" class="px-0 w-100 h-100">
    <v-row class="py-16 py-md-16 py-sm-16 py-lg-16" justify="center">
      <v-col cols="12" sm="12">
        <Content/>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" lg="6" md="6" sm="12">
        <v-card border="0" color="transparent" elevation="0">
          <v-row class="text-center" justify="center" no-gutters>
            <v-col cols="12">
              <v-avatar :size="mdAndUp ? 300 : 88" elevation="12">
                <v-img alt="Filip Miskovic" src="@/assets/imgs/filip-t-bg.png"/>
              </v-avatar>
            </v-col>
            <v-col cols="12">
              <v-card-text class="d-flex flex-column justify-center h-100">
                <v-row class="text-center" justify="center">
                  <v-col cols="12">
                    <h3 class="text-center text-lg-h3 text-h4 font-weight-light mb-4">
                      Filip Mišković
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
              <v-avatar :size="mdAndUp ? 300 : 88" elevation="12">
                <v-img alt="Nikola Petrovic" src="@/assets/imgs/nikola-t-bg.png"/>
              </v-avatar>
            </v-col>
            <v-col cols="12">
              <v-card-text class="d-flex flex-column justify-center h-100">
                <v-row class="text-center" justify="center">
                  <v-col cols="12">
                    <h3 class="text-center text-lg-h3 text-h4 font-weight-light mb-4">
                      Nikola Petrović
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
    <v-row class="py-16 py-md-16 py-sm-16 py-lg-16" justify="center">
      <v-col cols="12" sm="12">
        <v-card :flat="true" class="pa-4 pa-md-16" color="primary">
          <v-row align="center" justify="space-between">
            <v-col cols="12">
              <h1 class="text-h3 font-weight-bold mx-auto mb-4 text-center">
                <strong>Need an expert for your project?</strong>
              </h1>
            </v-col>
            <v-col cols="12">
              <h4 class="text-h4 font-weight-bold mx-auto mb-4 text-center">
                <strong>You are at the right place!</strong>
              </h4>
            </v-col>
            <v-col class="text-center" cols="12">
              <v-btn prepend-icon="mdi-chat-outline" size="large" width="200" @click.stop="$router.push('/contact')">
                Let's talk
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
