<template>
  <v-card :flat="true" class="pa-4 pa-md-16" color="secondary">
    <v-row align="center" justify="space-between">
      <v-col cols="12" md="5">
        <h1 class="text-h3 font-weight-bold mx-auto mb-4 text-center">
          <strong>A programming duo with three decades of combined expertise.</strong>
        </h1>
      </v-col>

      <v-col cols="12" md="5">
        <v-img alt="softika logo symbol" class="rotating" height="300"
               src="@/assets/imgs/black_symbol_transparent.svg"/>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts" setup>
//
</script>

<style lang="css" scoped>
.rotating {
  transition: transform 2s ease-in-out;
}

.rotating:hover {
  transform: rotateZ(360deg);
}
</style>
