<template>
  <news-layout title="Latest News" subtitle="find the latest news here">
    <v-col cols="12" sm="6" v-for="(article, index) in articles" :key="index">
      <card-news :article="article" />
    </v-col>
  </news-layout>
</template>

<script setup lang="ts">
import NewsLayout from './NewsLayout.vue'
import { useNewsStore } from '../stores'
import CardNews from './CardNews.vue'

const store = useNewsStore()

const articles = computed(() => store.todayNews?.articles)
</script>

<style scoped></style>
