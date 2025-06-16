<template>
  <news-layout title="Latest News" :articles="articles" />
</template>

<script setup lang="ts">
import NewsLayout from './NewsLayout.vue'
import { useNewsStore } from '../stores'

const store = useNewsStore()

const articles = computed(() => store.todayNews?.articles)
</script>

<style scoped></style>
