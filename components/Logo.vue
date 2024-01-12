<script lang="ts" setup>
</script>

<template>
  <div class="d-flex align-center justify-start" @click="$router.push('/')">
    <img alt="softika logo symbol" class="my-logo" src="@/assets/imgs/black_logo_transparent.svg"/>
  </div>
</template>

<style scoped>
.my-logo {
  overflow: visible;
  margin-left: 0.0rem !important; /* Remove left margin */
  margin-right: 0.0rem !important; /* Remove right margin */
  margin-top: 0.3rem !important;
  max-height: 13rem !important;
  width: auto;
}
</style>
