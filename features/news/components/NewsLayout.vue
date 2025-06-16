<template>
  <v-card variant="text" rounded="lg" class="mb-8">
    <v-card-item :title="title" class="bg-transparent" />
    <v-card-text>
      <slot />
      <v-row dense>
        <v-col
          cols="12"
          md="6"
          v-for="(article, index) in articles"
          :key="index"
        >
          <card-news :article="article" />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import CardNews from './CardNews.vue'
import type { Article } from '../types'

defineProps<{
  title: string
  articles?: Article[]
}>()
</script>

<style scoped></style>
