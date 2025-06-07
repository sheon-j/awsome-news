<template>
  <v-row>
    <v-col cols="12" lg="6">
      <today-news />
    </v-col>
    <v-col cols="12" lg="6">
      <category-news />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import TodayNews from '@/features/news/components/TodayNews.vue'
import CategoryNews from '@/features/news/components/CategoryNews.vue'
</script>

<style scoped></style>
