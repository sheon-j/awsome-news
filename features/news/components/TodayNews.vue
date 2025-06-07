<template>
  <v-card
    variant="text"
    rounded="lg"
    title="Today's News"
    subtitle="find the latest news here"
  >
    <v-row dense>
      <v-col
        cols="12"
        sm="6"
        md="4"
        lg="3"
        v-for="(article, index) in articles"
        :key="index"
      >
        <card-news :article="article" />
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup lang="ts">
import { useNewsStore } from '../stores'
import CardNews from './CardNews.vue'

const store = useNewsStore()

const articles = computed(() => store.todayNews?.articles)
</script>

<style scoped></style>
