<script lang="ts" setup>
defineProps({
  text: {
    type: String,
    required: false,
    default: 'contact us'
  },
  icon: {
    type: String,
    required: false,
    default: 'mdi-email-fast-outline'
  }
})
</script>

<template>
  <v-btn :prepend-icon="icon" color="black" size="large" @click="$router.push('/contact')">
    {{ text }}
  </v-btn>
</template>

<style lang="css" scoped>

</style>
