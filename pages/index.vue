<script lang='ts' setup>
import ServiceWeb from "~/components/ServiceWeb.vue";
import Tech from "~/components/Tech.vue";
</script>

<template>
  <v-row align="center" class="py-16" justify="center">
    <v-col class="text-center" cols="12">
      <MyBanner
          bg-variation="var2"
          text="We provide full-stack development services."
          title="Hello 👋, we're Softika."
      />
    </v-col>
  </v-row>

  <!--  Services  -->
  <v-row align="center" justify="center">
    <v-col cols="12">
      <div class='text-h4 text-center font-weight-bold'>
        What we do is...
      </div>
    </v-col>
  </v-row>
  <v-row align="center" class="py-2" justify="center">
    <v-col cols="12"/>
  </v-row>
  <v-row align="center" class="py-2" justify="center">
    <v-col cols="12">
      <ServiceWeb/>
    </v-col>
  </v-row>
  <v-row align="center" class="py-2" justify="center">
    <v-col cols="12">
      <ServiceApi/>
    </v-col>
  </v-row>
  <v-row align="center" class="py-2" justify="center">
    <v-col cols="12">
      <ServiceMobile/>
    </v-col>
  </v-row>
  <v-row align="center" class="py-2" justify="center">
    <v-col cols="12">
      <ServiceSaas/>
    </v-col>
  </v-row>

  <!--  Expertise  -->
  <v-row align="center" class="py-16" justify="center">
    <v-col cols="12">
      <MyBanner bg-variation="var3"/>
      <div class='text-h4 text-center font-weight-bold py-10'>
        Our tech stack
      </div>
    </v-col>
    <v-col cols="12">
      <Tech/>
    </v-col>
  </v-row>

  <!--  Team  -->
  <v-row align="center" justify="center">
    <v-col cols="12">
      <div class='text-h4 text-center font-weight-bold py-10'>
        People behind Softika
      </div>
    </v-col>
    <v-col cols="12">
      <MyBanner
          bg-variation="var2"
          button-icon=" mdi-magnify"
          button-text="find out"
          route-path="/team"
          title="Let us tell you who we are."
      />
    </v-col>
  </v-row>
</template>

<style lang='sass'>
</style>
