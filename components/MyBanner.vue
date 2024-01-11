<script lang="ts" setup>
import {useDisplay} from "vuetify"

const {mdAndUp} = useDisplay()

defineProps({
  title: {
    type: String,
    required: false,
    default: ''
  },
  text: {
    type: String,
    required: false,
    default: ''
  },
  buttonText: {
    type: String,
    required: false,
    default: ''
  },
  buttonIcon: {
    type: String,
    required: false,
    default: ''
  },
  routePath: {
    type: String,
    required: false,
    default: ''
  },
  bgVariation: {
    type: String,
    required: false,
    default: 'var1'
  }
})
</script>

<template>
  <div id="div-banner" class="banner">
    <!--   background variations-->
    <div v-if="bgVariation==='var1'" id="banner-background" class="div-background"/>
    <div v-if="bgVariation==='var1'" id="banner-background2" class="div-background"/>
    <div v-if="bgVariation==='var2'" id="banner-background-var2" class="div-background"/>
    <div v-if="bgVariation==='var2'" id="banner-background2-var2" class="div-background"/>
    <div v-if="bgVariation==='var3'" id="banner-background-var3" class="div-background"/>
    <div v-if="bgVariation==='var3'" id="banner-background2-var3" class="div-background"/>
    <div v-if="bgVariation==='var4'" id="banner-background-var4" class="div-background"/>
    <div v-if="bgVariation==='var4'" id="banner-background2-var4" class="div-background"/>

    <div v-if="title" id="banner" class="panel">
      <v-row align="center" justify="center">
        <v-col cols="12">
          <div id="banner-title" class="text-center">
            {{ title }}
          </div>
        </v-col>
        <v-col v-if="text" cols="12">
          <div id="banner-text" class="text-center font-weight-bold">{{ text }}</div>
        </v-col>
        <v-col v-if="buttonText" cols="12">
          <div class="text-center">
            <v-btn
                :prepend-icon="buttonIcon"
                :size="mdAndUp ? 'large' : 'small'"
                color="black"
                @click.stop="$router.push(routePath)"
            >
              {{ buttonText }}
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<style lang="css" scoped>
#div-banner {
  margin-bottom: 5rem;
}

.banner {
  margin-bottom: 3rem;
  position: relative;
}

#banner-background {
  display: block;
  background: #e04050;
  bottom: -2rem;
  height: 12rem;
  transform: skewY(-5deg);
  opacity: .8;
}

#banner-background2 {
  display: block;
  background: #40e0d0;
  bottom: -6rem;
  height: 5rem;
  opacity: .5;
  transform: skewY(-5deg);
}

#banner-background-var2 {
  display: block;
  background: #e04050;
  bottom: -2rem;
  height: 12rem;
  transform: skewY(5deg);
  opacity: .8;
}

#banner-background2-var2 {
  display: block;
  background: #40e0d0;
  bottom: -6rem;
  height: 5rem;
  opacity: .5;
  transform: skewY(5deg);
}

#banner-background-var3 {
  display: block;
  background: #40e0d0;
  bottom: -2rem;
  height: 12rem;
  transform: skewY(-5deg);
  opacity: .8;
}

#banner-background2-var3 {
  display: block;
  background: #e04050;
  bottom: -6rem;
  height: 5rem;
  opacity: .5;
  transform: skewY(-5deg);
}

#banner-background-var4 {
  display: block;
  background: #40e0d0;
  bottom: -2rem;
  height: 12rem;
  transform: skewY(5deg);
  opacity: .8;
}

#banner-background2-var4 {
  display: block;
  background: #e04050;
  bottom: -6rem;
  height: 5rem;
  opacity: .5;
  transform: skewY(5deg);
}

.div-background {
  position: absolute;
  left: -1rem;
  right: -1rem;
  z-index: 1;
}

.panel {
  background: #FCFBF4;
  border-radius: 1rem;
  box-shadow: -27.1px 62.5px 125px -25px rgba(50, 50, 93, .5), -16.2px 37.5px 75px -37.5px rgba(0, 0, 0, .6);
  margin: auto auto 3rem;
  max-width: 80%;
  padding: 3rem;
  position: relative;
  z-index: 3;
}

#banner-title {
  font-size: 2rem;
  font-weight: 700;
}

#banner-text {
  font-size: 1.5rem;
  overflow: hidden;
}
</style>
