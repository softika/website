<script lang="ts" setup>
</script>

<template>
  <v-app>
    <Header/>
    <v-main>
      <v-container :fluid="true">
        <slot/>
      </v-container>
    </v-main>
    <Footer/>
  </v-app>
</template>

<style lang="css" scoped>
</style>
