<script lang="ts" setup>
import {rules} from "@/utils/rules"
import {reactive} from "vue"

const message = reactive({
  name: '',
  email: '',
  subject: '',
  text: '',
})

function sendMessage() {
  console.info("Sending message to %s on %s", message.name, message.email)
  console.info("Sending message text %s", message.text)
}

function clearMessage() {
  message.name = ''
  message.email = ''
  message.subject = ''
  message.text = ''
}
</script>

<template>
  <v-card class="py-16 py-md-16 py-sm-16 py-lg-16 ma-4" variant="text">
    <v-row justify="center">
      <v-col cols="12">
        <h3 class="text-center text-h3 mb-4">
          <strong class="text-primary">Upcoming project?</strong>
        </h3>
      </v-col>
      <v-col cols="12">
        <h5 class="text-center text-h5 mb-4">
          <strong>We'd love to work with you.</strong>
        </h5>
      </v-col>
    </v-row>
    <v-row class="px-md-16 px-lg-16 px-sm-0" justify="center">
      <v-col cols="12" md="6" sm="12">
        <v-text-field
            v-model="message.name"
            :rules="rules.name"
            class="font-weight-bold"
            placeholder="Your Name"
            variant="outlined"
        />
      </v-col>

      <v-col cols="12" md="6" sm="12">
        <v-text-field
            v-model="message.email"
            :rules="rules.email"
            class="font-weight-bold"
            placeholder="Your Email"
            variant="outlined"
        />
      </v-col>

      <v-col cols="12">
        <v-text-field
            v-model="message.subject"
            :rules="rules.name"
            class="font-weight-bold"
            placeholder="Subject"
            variant="outlined"/>
      </v-col>

      <v-col cols="12">
        <v-textarea
            v-model="message.text"
            :rules="rules.text"
            class="font-weight-bold"
            no-resize
            placeholder="Your Message"
            rows="8"
            variant="outlined"
        />
      </v-col>

      <v-col cols="12" md="6" sm="12">
        <v-btn :block="true" class="me-2 bg-secondary font-weight-bold" size="large" width="128"
               @click="sendMessage">
          Send
        </v-btn>
      </v-col>
      <v-col cols="12" md="6" sm="12">
        <v-btn :block="true" class="me-2 text-black font-weight-bold" size="large" variant="outlined" width="128"
               @click="clearMessage">
          Clear
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>
