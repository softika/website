<script lang="ts" setup>
import Logo from '~/components/Logo.vue'
import {ref} from 'vue'

const drawer = ref(false)

</script>

<template>
  <v-app-bar :flat="true" app elevation="0" height="70">
    <template #prepend>
      <Logo/>
    </template>

    <template #append>
      <div class="hidden-md-and-down">
        <v-btn class="font-weight-bold" @click.stop="$router.push('/')">Home</v-btn>
        <v-btn class="font-weight-bold" @click.stop="$router.push('/team')">Team</v-btn>
        <v-btn class="font-weight-bold" @click.stop="$router.push('/contact')">Contact</v-btn>
      </div>
      <v-app-bar-nav-icon class="hidden-lg-and-up" elevation="0" @click.stop="drawer = !drawer"/>
    </template>
  </v-app-bar>
  <v-navigation-drawer
      v-model="drawer"
      :temporary="true"
      app
      color="background"
      location="top"
  >
    <v-list :nav="true">
      <v-list-item
          :nav="true"
          active-class="text-secondary"
          class="font-weight-black"
          prepend-icon="mdi-home-outline"
          to="/"
      >
        Home
      </v-list-item>
      <v-list-item
          :nav="true"
          active-class="text-secondary"
          class="font-weight-bold"
          prepend-icon="mdi-account-multiple-outline"
          to="/team"
      >
        Team
      </v-list-item>
      <v-list-item
          :nav="true"
          active-class="text-secondary"
          class="font-weight-bold"
          prepend-icon="mdi-email-outline"
          to="/contact"
      >
        Contact
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

