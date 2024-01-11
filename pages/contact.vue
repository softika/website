<script lang="ts" setup>
import {rules} from "@/utils/rules"
import {reactive} from "vue"
import {useChallengeV3} from 'vue-recaptcha'
import emailjs from '@emailjs/browser';

const response = ref()
const checked = ref(false)
const sendSuccess = ref(false)
const sendError = ref(false)
useRecaptchaProvider()
const {execute} = useChallengeV3('submit')

async function challenge() {
  response.value = await execute()
  if (response) {
    checked.value = true
  }
}

const message = reactive({
  name: '',
  email: '',
  subject: '',
  text: '',
})

const config = useRuntimeConfig();
const publicKey = config.public['EMAILJS_PUBLIC_KEY']
const serviceId = config.public['EMAILJS_SERVICE_ID']
const templateId = config.public['EMAILJS_TEMPLATE_ID']

function sendMessage() {
  emailjs.send(
      serviceId,
      templateId,
      message,
      publicKey
  ).then(res => {
    sendSuccess.value = true
    clearMessage()
  }).catch(err => {
    sendError.value = true
  })
}

function clearMessage() {
  message.name = ''
  message.email = ''
  message.subject = ''
  message.text = ''
  response.value = null
  checked.value = false
}

function isSendReady() {
  return response.value && message.name && message.email && message.subject && message.text
}
</script>

<template>
  <v-row align="center" class="py-16 py-md-16 py-sm-16 py-lg-16" justify="center">
    <v-col cols="12">
      <MyBanner
          bg-variation="var2"
          text="We'd love to work with you. Send us a message."
          title="Do you have an upcoming project?"
      />
    </v-col>
  </v-row>

  <v-card class="ma-4" variant="text">
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

      <v-col cols="12">
        <v-checkbox-btn v-model="checked" color="black" label="I'm not a robot!" @click="challenge"/>
      </v-col>
      <v-col cols="12" md="6" sm="12">
        <v-btn
            :block="true"
            :disabled="!isSendReady()"
            class="me-2 bg-secondary font-weight-bold" size="large"
            width="128"
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
    <v-col cols="12">
      <v-snackbar v-model="sendSuccess" :absolute="true" bottom color="success">
        <span>Message sent successfully</span>
        <v-icon dark>
          mdi-checkbox-marked-circle
        </v-icon>
      </v-snackbar>
      <v-snackbar v-model="sendError" :absolute="true" bottom color="error">
        <span>Message sent failed</span>
        <p>Please try later</p>
        <v-icon dark>
          alert-circle-outline
        </v-icon>
      </v-snackbar>
    </v-col>
  </v-card>
  <v-row align="center" class="py-16 py-md-16 py-sm-16 py-lg-16 " justify="center">
    <v-col cols="12">
      <MyBanner
          bg-variation="var1"
      />
    </v-col>
  </v-row>
</template>

<style lang="css" scoped>
.v-card {
  z-index: 2;
}


.v-checkbox-btn {
  animation: wiggle 2s linear infinite;
  transform-origin: 10% 5em;
}

/* Keyframes */
@keyframes wiggle {
  0%, 7% {
    transform: rotateZ(0);
  }
  15% {
    transform: rotateZ(-15deg);
  }
  20% {
    transform: rotateZ(10deg);
  }
  25% {
    transform: rotateZ(-10deg);
  }
  30% {
    transform: rotateZ(6deg);
  }
  35% {
    transform: rotateZ(-4deg);
  }
  40%, 100% {
    transform: rotateZ(0);
  }
}

</style>
