<script lang="ts" setup>
import MyBanner from "~/components/MyBanner.vue";
import {useDisplay} from 'vuetify'

const {mdAndUp} = useDisplay()

useSeoMeta({
  title: 'Our Expertise — Cloud Native, AI Agents, SaaS & DevOps | Softika',
  description: 'A focused engineering studio specializing in AI agent development, cloud-native architecture, SaaS platforms, and DevOps. Senior engineers building production-grade software from Vienna.',
  ogTitle: 'Our Expertise — Cloud Native, AI Agents, SaaS & DevOps | Softika',
  ogDescription: 'A focused engineering studio specializing in AI agent development, cloud-native architecture, SaaS platforms, and DevOps.',
  ogType: 'website',
  ogUrl: 'https://www.softika.dev/team/',
  ogSiteName: 'Softika',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Our Expertise | Softika',
  twitterDescription: 'Cloud native. AI-powered. Production-ready. Senior engineers from Vienna.',
})

useHead({
  link: [{rel: 'canonical', href: 'https://www.softika.dev/team/'}],
})

const capabilities = [
  {
    icon: 'mdi-cloud-outline',
    title: 'Cloud Native Solutions',
    description: 'We architect and build resilient, scalable systems on AWS, GCP, and Azure. From Kubernetes orchestration to serverless functions, we design infrastructure that grows with your business.',
  },
  {
    icon: 'mdi-robot-outline',
    title: 'AI & Agentic Development',
    description: 'We build intelligent systems that go beyond simple automation. From LLM-powered agents to custom AI pipelines, we help you harness the full potential of modern AI to solve real business problems.',
  },
  {
    icon: 'mdi-rocket-launch-outline',
    title: 'SaaS Platforms',
    description: 'We design, build, and ship SaaS products end-to-end. Multi-tenant architectures, subscription billing, onboarding flows, analytics dashboards — we handle the full stack so you can focus on your users.',
  },
  {
    icon: 'mdi-infinity',
    title: 'DevOps & Platform Engineering',
    description: 'CI/CD pipelines, infrastructure as code, observability, and developer experience. We build the platforms and toolchains that let engineering teams ship faster with confidence.',
  },
  {
    icon: 'mdi-server-outline',
    title: 'Backend Engineering',
    description: 'High-performance APIs, event-driven architectures, and distributed systems built with Go, Java, and TypeScript. We write backend code that is clean, tested, and ready for production traffic.',
  },
]
</script>

<template>
  <v-row class="py-16" justify="center">
    <v-col cols="12">
      <MyBanner
          title="Engineering team obsessed with building things that scale."
      />
    </v-col>
  </v-row>

  <v-row justify="center">
    <v-col cols="12" lg="8" md="10">
      <div class="text-center text-grey-darken-1 text-h6 font-weight-regular mb-12 px-4">
        We are a focused engineering studio with deep expertise in cloud infrastructure,
        AI-powered systems, and production-grade software. We don't just write code — we
        build platforms, ship products, and solve hard problems.
      </div>
    </v-col>
  </v-row>

  <v-row justify="center">
    <v-col
        v-for="capability in capabilities"
        :key="capability.title"
        cols="12"
        lg="4"
        md="6"
        sm="12"
    >
      <v-card
          border="0"
          class="pa-6 h-100"
          color="transparent"
          elevation="0"
      >
        <div class="text-center mb-4">
          <v-icon :size="mdAndUp ? 64 : 48" color="blue-grey-darken-2">{{ capability.icon }}</v-icon>
        </div>
        <h3 class="text-center text-h5 font-weight-bold mb-4">
          {{ capability.title }}
        </h3>
        <div class="text-justify text-grey-darken-1 text-body-1">
          {{ capability.description }}
        </div>
      </v-card>
    </v-col>
  </v-row>

  <v-row class="py-8" justify="center">
    <v-col cols="12">
      <MyBanner
          bg-variation="var3"
      />
    </v-col>
    <v-col cols="12" lg="8" md="10">
      <div class="text-center px-4 py-8">
        <h3 class="text-h4 font-weight-bold mb-6">How we work</h3>
        <div class="text-grey-darken-1 text-h6 font-weight-regular">
          Small team. No overhead. Direct access to senior engineers from day one.
          We embed into your workflow, move fast, and deliver production-ready code
          — not slide decks.
        </div>
      </div>
    </v-col>
  </v-row>

  <v-row class="py-16" justify="center">
    <v-col cols="12">
      <MyBanner
          bg-variation="var4"
          button-icon="mdi-chat-outline"
          button-text=" Let's talk"
          route-path="/contact"
          text="Let's build something great together."
          title="Ready to start your next project?"
      />
    </v-col>
  </v-row>
</template>
