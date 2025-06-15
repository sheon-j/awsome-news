<template>
  <v-sheet max-width="1200" class="mx-auto bg-transparent">
    <today-news />
    <category-news />
  </v-sheet>
</template>

<script setup lang="ts">
import TodayNews from '@/features/news/components/TodayNews.vue'
import CategoryNews from '@/features/news/components/CategoryNews.vue'
</script>

<style scoped></style>
