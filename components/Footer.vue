<script lang="ts" setup>
import Logo from "~/components/Logo.vue"
</script>

<template>
  <v-card border="0" color="background" elevation="0">
    <v-container class="text-center py-12">
      <div class="d-inline-block">
        <Logo/>
      </div>

      <div class="my-16">
        <v-btn class="mx-2" rounded variant="text" @click.stop="$router.push('/')">
          Home
        </v-btn>
        <v-btn class="mx-2" rounded variant="text" @click.stop="$router.push('/contact')">
          Contact
        </v-btn>
        <v-btn class="mx-2" rounded variant="text" @click.stop="$router.push('/team')">
          Team
        </v-btn>
        <v-btn class="mx-2" rounded variant="text" @click.stop="$router.push('/policy')">
          Privacy Policy
        </v-btn>
        <v-btn class="mx-2" rounded variant="text" @click.stop="$router.push('/imprint')">
          Imprint
        </v-btn>
      </div>
      <div class="my-16">
        <v-btn class="mx-4"
               href="https://www.linkedin.com/company/softika"
               icon="mdi-linkedin"
               target="_blank"
               variant="text"/>
        <v-btn class="mx-4"
               href="https://www.instagram.com/softika.dev/"
               icon="mdi-instagram"
               target="_blank"
               variant="text"/>
        <v-btn class="mx-4"
               href="https://twitter.com/SoftikaDev"
               icon="mdi-twitter"
               target="_blank"
               variant="text"/>
        <v-btn class="mx-4"
               href="https://www.facebook.com/profile.php?id=61555499463949"
               icon="mdi-facebook"
               target="_blank"
               variant="text"/>
      </div>


      <div class="text-center mt-10">
        All rights reserved &copy;
        {{ new Date().getFullYear() }}, Softika Team
      </div>
    </v-container>
  </v-card>
</template>
