<template>
  <news-layout title="Category News" subtitle="choose your category">
    <v-chip-group
      v-model="store.category"
      mandatory
      variant="text"
      color="primary"
      class="mx-auto"
    >
      <v-chip
        v-for="category in categories"
        :key="category.value"
        :value="category.value"
        :text="category.label"
        :prepend-icon="category.icon"
        class="mx-2"
      />
    </v-chip-group>
    <v-col cols="12" sm="6" v-for="(article, index) in articles" :key="index">
      <card-news :article="article" />
    </v-col>
  </news-layout>
</template>

<script setup lang="ts">
import NewsLayout from './NewsLayout.vue'
import CardNews from './CardNews.vue'
import {
  mdiOfficeBuildingOutline,
  mdiCreationOutline,
  mdiHeartOutline,
  mdiFlaskOutline,
  mdiSoccer,
  mdiMonitorCellphone,
} from '@mdi/js'

import { useNewsStore } from '../stores'

const store = useNewsStore()

const articles = computed(() => store.categoryNews?.articles)

const categories = [
  {
    label: 'Business',
    value: 'business',
    icon: mdiOfficeBuildingOutline,
  },
  {
    label: 'Entertainment',
    value: 'entertainment',
    icon: mdiCreationOutline,
  },
  {
    label: 'Health',
    value: 'health',
    icon: mdiHeartOutline,
  },
  {
    label: 'Science',
    value: 'science',
    icon: mdiFlaskOutline,
  },
  {
    label: 'Sports',
    value: 'sports',
    icon: mdiSoccer,
  },
  {
    label: 'Technology',
    value: 'technology',
    icon: mdiMonitorCellphone,
  },
]
</script>

<style scoped></style>
