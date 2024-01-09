<template>
  <v-container>
    <v-card :flat="true" color="transparent" elevation="5">
      <v-carousel height="400" hide-delimiter-background>
        <!-- FRONTEND -->
        <v-carousel-item>
          <v-container>
            <v-row class="pa-2 ma-2 pa-lg-0 ma-lg-0 pa-md-0 ma-md-0 justify-center align-center">
              <v-col cols="12">
                <div class="text-center text-h3 font-weight-bold">
                  Frontend
                </div>
              </v-col>
            </v-row>
            <v-row class="pa-2 ma-2 justify-center align-center">
              <v-col align="center" lg="3" md="3" sm="3" xs="3">
                <v-img
                    alt="HTML"
                    max-height="100"
                    max-width="100"
                    src="@/assets/svgs/html.svg"
                />
              </v-col>
              <v-col align="center" lg="3" md="3" sm="3" xs="3">
                <v-img
                    alt="CSS"
                    max-height="100"
                    max-width="100"
                    src="@/assets/svgs/css.svg"
                />
              </v-col>
              <v-col align="center" lg="3" md="3" sm="3" xs="3">
                <v-img
                    alt="Javascript"
                    max-height="100"
                    max-width="100"
                    src="@/assets/svgs/javascript.svg"
                />
              </v-col>
              <v-col align="center" lg="3" md="3" sm="3" xs="3">
                <v-img
                    alt="Typescript"
                    max-height="100"
                    max-width="100"
                    src="@/assets/svgs/typescript.svg"
                />
              </v-col>
            </v-row>
            <v-row class="pa-2 ma-2 justify-center align-center">
              <v-col align="center" lg="4" md="4" sm="4" xs="4">
                <v-img
                    alt="React"
                    max-height="100"
                    max-width="100"
                    src="@/assets/svgs/react.svg"
                />
              </v-col>
              <v-col align="center" lg="4" md="4" sm="4" xs="4">
                <v-img
                    alt="Vue"
                    max-height="100"
                    max-width="100"
                    src="@/assets/svgs/vue.svg"
                />
              </v-col>
              <v-col align="center" lg="4" md="4" sm="4" xs="4">
                <v-img
                    alt="Angular"
                    max-height="100"
                    max-width="100"
                    src="@/assets/svgs/angular.svg"
                />
              </v-col>
            </v-row>
          </v-container>
        </v-carousel-item>

        <!-- BACKEND -->
        <v-carousel-item>
          <v-container>
            <v-row class="pa-2 ma-2 pa-lg-0 ma-lg-0 pa-md-0 ma-md-0 justify-center align-center">
              <v-col cols="12">
                <div class="text-center text-h3 font-weight-bold">
                  Backend
                </div>
              </v-col>
            </v-row>
            <v-row class="pa-2 ma-2 justify-center align-center">
              <v-col align="center" lg="4" md="4" sm="4" xs="4">
                <v-img
                    alt="GO"
                    max-height="100"
                    max-width="100"
                    src="@/assets/svgs/go.svg"
                />
              </v-col>
              <v-col align="center" lg="4" md="4" sm="4" xs="4">
                <v-img
                    alt="Java"
                    max-height="100"
                    max-width="100"
                    src="@/assets/svgs/java.svg"
                />
              </v-col>
              <v-col align="center" lg="4" md="4" sm="4" xs="4">
                <v-img
                    alt="NodeJS"
                    max-height="100"
                    max-width="100"
                    src="@/assets/svgs/node-js.svg"
                />
              </v-col>
            </v-row>
            <v-row class="pa-2 ma-2 justify-center align-center">
              <v-col align="center" lg="4" md="4" sm="4" xs="4">
                <v-img
                    alt="Spring"
                    max-height="100"
                    max-width="100"
                    src="@/assets/svgs/spring.svg"
                />
              </v-col>
              <v-col align="center" lg="4" md="4" sm="4" xs="4">
                <v-img
                    alt="Quarkus"
                    max-height="100"
                    max-width="100"
                    src="@/assets/svgs/quarkus.svg"
                />
              </v-col>
              <v-col align="center" lg="4" md="4" sm="4" xs="4">
                <v-img
                    alt="Apache Kafka"
                    max-height="100"
                    max-width="100"
                    src="@/assets/svgs/kafka.svg"
                />
              </v-col>
            </v-row>
          </v-container>
        </v-carousel-item>

        <!-- STORAGE -->
        <v-carousel-item>
          <v-container>
            <v-row class="pa-2 ma-2 pa-lg-4 ma-lg-4 pa-md-4 ma-md-4 justify-center align-center">
              <v-col cols="12">
                <div class="text-center text-h3 font-weight-bold">
                  Data
                </div>
              </v-col>
            </v-row>
            <v-row class="pa-2 ma-2 justify-center align-center">
              <v-col align="center" lg="3" md="3" sm="3" xs="3">
                <v-img
                    alt="Postgres"
                    max-height="100"
                    max-width="100"
                    src="@/assets/svgs/postgresql.svg"
                />
              </v-col>
              <v-col align="center" lg="3" md="3" sm="3" xs="3">
                <v-img
                    alt="MySQL"
                    max-height="100"
                    max-width="100"
                    src="@/assets/svgs/mysql.svg"
                />
              </v-col>
              <v-col align="center" lg="3" md="3" sm="3" xs="3">
                <v-img
                    alt="Redis"
                    max-height="100"
                    max-width="100"
                    src="@/assets/svgs/redis.svg"
                />
              </v-col>
              <v-col align="center" lg="3" md="3" sm="3" xs="3">
                <v-img
                    alt="MongoDB"
                    max-height="100"
                    max-width="100"
                    src="@/assets/svgs/mongodb.svg"
                />
              </v-col>
            </v-row>
          </v-container>
        </v-carousel-item>

        <!-- INFRASTRUCTURE -->
        <v-carousel-item>
          <v-container>
            <v-row class="pa-2 ma-2 pa-lg-4 ma-lg-4 pa-md-4 ma-md-4 justify-center align-center">
              <v-col cols="12">
                <div class="text-center text-h3 font-weight-bold">
                  Cloud
                </div>
              </v-col>
            </v-row>
            <v-row class="pa-2 ma-2 justify-center align-center">
              <v-col align="center" lg="4" md="4" sm="4" xs="4">
                <v-img
                    alt="Docker"
                    max-height="100"
                    max-width="100"
                    src="@/assets/svgs/docker.svg"
                />
              </v-col>
              <v-col align="center" lg="4" md="4" sm="4" xs="4">
                <v-img
                    alt="Kubernetes"
                    max-height="100"
                    max-width="100"
                    src="@/assets/svgs/kubernetes.svg"
                />
              </v-col>
              <v-col align="center" lg="4" md="4" sm="4" xs="4">
                <v-img
                    alt="AWS"
                    max-height="100"
                    max-width="100"
                    src="@/assets/svgs/aws.svg"
                />
              </v-col>
            </v-row>
          </v-container>
        </v-carousel-item>
      </v-carousel>
    </v-card>
  </v-container>
</template>

<script lang="ts" setup>
</script>
<style lang="css" scoped>
.v-card {
  z-index: 2;
}
</style>
