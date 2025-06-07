<template>
  <v-card variant="text" rounded="lg" @click="open(article.url)">
    <v-list lines="two" class="pa-0">
      <v-list-item>
        <template #prepend>
          <v-avatar rounded="lg" size="68" color="grey-filled">
            <v-img
              v-if="article.urlToImage"
              :src="article.urlToImage"
              cover
              aspect-ratio="1"
            />
            <span
              v-else
              v-text="article.source.name"
              class="font-weight-bold"
            />
          </v-avatar>
        </template>
        <v-list-item-title class="text-caption opacity-70">
          {{ article.source.name }}
        </v-list-item-title>
        <v-list-item-subtitle class="text-body-2 opacity-100">
          {{ article.title }}
        </v-list-item-subtitle>
        <span v-text="publishedAt" class="text-caption opacity-70" />
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script setup lang="ts">
import type { Article } from '../types'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

const props = defineProps<{
  article: Article
}>()

const open = (url: string) => window.open(url, '_blank')

const publishedAt = computed(() => {
  const date = dayjs(props.article.publishedAt)
  return date.fromNow()
})
</script>

<style scoped></style>
