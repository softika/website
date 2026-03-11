<script lang='ts' setup>
import {useDisplay} from 'vuetify'

const {mdAndUp} = useDisplay()

const services = [
  {
    icon: 'mdi-robot-outline',
    title: 'AI Agents & Automation',
    description: 'We build autonomous AI agents that handle real workflows — not chatbot demos. From LLM orchestration and tool-calling pipelines to multi-agent systems that reason, act, and learn. If it can be automated with intelligence, we build it.',
    highlights: ['Multi-agent orchestration', 'LLM tool-calling pipelines', 'RAG & knowledge systems', 'Human-in-the-loop workflows'],
  },
  {
    icon: 'mdi-shield-lock-outline',
    title: 'Agent Security & Guardrails',
    description: 'AI agents open new attack surfaces — prompt injection, data exfiltration, privilege escalation, uncontrolled tool access. We build secure-by-design agent systems with proper sandboxing, input validation, output filtering, and audit trails.',
    highlights: ['Prompt injection defense', 'Tool permission boundaries', 'Output sanitization', 'Compliance & audit logging'],
  },
  {
    icon: 'mdi-rocket-launch-outline',
    title: 'SaaS Product Engineering',
    description: 'We help founders and teams go from idea to paying customers. Multi-tenant architecture, subscription billing, onboarding, dashboards, and the invisible plumbing that makes SaaS products reliable at scale.',
    highlights: ['Multi-tenant architecture', 'Payment & billing integration', 'Analytics dashboards', 'Zero-downtime deployments'],
  },
  {
    icon: 'mdi-infinity',
    title: 'Platform & DevOps',
    description: 'Infrastructure as code, CI/CD pipelines, Kubernetes, observability. We build internal developer platforms that let your team ship faster without breaking things. Cloud native from the ground up.',
    highlights: ['Kubernetes & containers', 'CI/CD automation', 'Infrastructure as code', 'Monitoring & alerting'],
  },
]

const trustSignals = [
  {icon: 'mdi-clock-fast', text: 'Senior engineers from day one'},
  {icon: 'mdi-shield-check-outline', text: 'Security-first architecture'},
  {icon: 'mdi-source-branch', text: 'Production-ready, tested code'},
  {icon: 'mdi-handshake-outline', text: 'Transparent, async communication'},
]
</script>

<template>
  <v-row align="center" class="py-16" justify="center">
    <v-col class="text-center" cols="12">
      <MyBanner
          bg-variation="var2"
          text="AI agents. Secure automation. SaaS products that scale."
          title="We build intelligent software."
      />
    </v-col>
  </v-row>

  <!--  Services  -->
  <v-row align="center" justify="center">
    <v-col cols="12">
      <div class='text-h4 text-center font-weight-bold'>
        What we build
      </div>
      <div class="text-center text-grey-darken-1 text-h6 font-weight-regular mt-4 px-4">
        Focused expertise where it matters most.
      </div>
    </v-col>
  </v-row>

  <v-row align="center" class="py-8" justify="center">
    <v-col
        v-for="service in services"
        :key="service.title"
        cols="12"
        lg="6"
        md="6"
    >
      <v-card
          border="0"
          class="pa-8 h-100"
          color="transparent"
          elevation="0"
      >
        <div :class="mdAndUp ? 'd-flex align-start' : 'text-center'">
          <v-icon
              :size="mdAndUp ? 48 : 40"
              class="mr-4 mt-1 flex-shrink-0"
              color="blue-grey-darken-2"
          >
            {{ service.icon }}
          </v-icon>
          <div>
            <h3 class="text-h5 font-weight-bold mb-3">
              {{ service.title }}
            </h3>
            <div class="text-grey-darken-1 text-body-1 mb-4">
              {{ service.description }}
            </div>
            <div class="d-flex flex-wrap ga-2">
              <v-chip
                  v-for="highlight in service.highlights"
                  :key="highlight"
                  color="blue-grey-lighten-4"
                  size="small"
                  variant="flat"
              >
                {{ highlight }}
              </v-chip>
            </div>
          </div>
        </div>
      </v-card>
    </v-col>
  </v-row>

  <!--  Why Softika  -->
  <v-row align="center" class="py-8" justify="center">
    <v-col cols="12">
      <MyBanner bg-variation="var3"/>
    </v-col>
    <v-col cols="12">
      <div class='text-h4 text-center font-weight-bold py-4'>
        Why teams choose us
      </div>
    </v-col>
    <v-col cols="12" lg="8" md="10">
      <v-row justify="center">
        <v-col
            v-for="signal in trustSignals"
            :key="signal.text"
            cols="12"
            md="6"
            sm="6"
        >
          <div class="d-flex align-center pa-4">
            <v-icon class="mr-4" color="blue-grey-darken-2" size="36">{{ signal.icon }}</v-icon>
            <span class="text-h6 font-weight-medium">{{ signal.text }}</span>
          </div>
        </v-col>
      </v-row>
    </v-col>
    <v-col class="text-center pt-8" cols="12" lg="8" md="10">
      <div class="text-grey-darken-1 text-h6 font-weight-regular px-4">
        Most AI projects fail not because the models are bad — but because the engineering around them is.
        We bring production-grade practices to every agent, every pipeline, every deploy.
        No shortcuts. No demo-ware. Code that runs in production, safely.
      </div>
    </v-col>
  </v-row>

  <!--  Team  -->
  <v-row align="center" class="py-16" justify="center">
    <v-col cols="12">
      <div class='text-h4 text-center font-weight-bold py-10'>
        The team behind Softika
      </div>
    </v-col>
    <v-col cols="12">
      <MyBanner
          bg-variation="var2"
          button-icon=" mdi-magnify"
          button-text="learn more"
          route-path="/team"
          title="Cloud native. AI-powered. Production-ready."
      />
    </v-col>
  </v-row>
</template>

<style lang='sass'>
</style>
