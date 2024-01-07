<script lang="ts" setup>
</script>

<template>
  <v-app>
    <Header/>
    <v-main>
      <v-container :fluid="true" class="w-100 h-100">
        <slot/>
      </v-container>
    </v-main>
    <Footer/>
  </v-app>
</template>

<style lang="css" scoped>
</style>
