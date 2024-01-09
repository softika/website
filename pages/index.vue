<script lang='ts' setup>
import ServiceWeb from "~/components/ServiceWeb.vue";
import Tech from "~/components/Tech.vue";
</script>

<template>
  <v-row align="center" class="py-16" justify="center">
    <v-col class="text-center" cols="12">
      <MyBanner
          bg-variation="var4"
          text="we make building software look easy."
          title="Hello 👋, we are Softika,"
      />
    </v-col>
  </v-row>

  <!--  Services  -->
  <v-row align="center" class="py-16 px-0 bg-background" justify="center">
    <v-col cols="12">
      <div class='text-h2 text-center font-weight-bold'>
        Services
      </div>
    </v-col>
  </v-row>
  <v-row align="center" class="bg-background" justify="center">
    <v-col cols="12">
      <ServiceWeb/>
      <MyBanner bg-variation="var3"/>
    </v-col>
  </v-row>
  <v-row align="center" class="bg-background" justify="center">
    <v-col cols="12">
      <ServiceApi/>
    </v-col>
  </v-row>
  <v-row align="center" class="bg-background" justify="center">
    <v-col cols="12">
      <ServiceMobile/>
      <MyBanner bg-variation="var4"/>
    </v-col>
  </v-row>
  <v-row align="center" class="bg-background" justify="center">
    <v-col cols="12">
      <ServiceSaas/>
    </v-col>
  </v-row>

  <!--  Expertise  -->
  <v-row align="center" class="py-16 px-0 bg-background" justify="center">
    <v-col cols="12">
      <div class='text-h2 text-center font-weight-bold py-16'>
        Expertise
      </div>
    </v-col>
    <v-col cols="12">
      <Tech/>
      <MyBanner bg-variation="var3"/>
    </v-col>
  </v-row>


  <v-row align="center" class="py-16 px-0" justify="center">
    <v-col cols="12">
      <div class='text-h2 text-center font-weight-bold pt-2'>
        People
      </div>
    </v-col>
    <v-col cols="12">
      <MyBanner
          bg-variation="var4"
          button-text="Meet the team"
          route-path="/team"
          title="Who we are?"
      />
    </v-col>
  </v-row>
</template>

<style lang='sass'>
</style>
