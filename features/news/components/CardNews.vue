<template>
  <v-card variant="text" rounded="lg" @click="open(article.url)">
    <v-list lines="two" class="pa-0">
      <v-list-item>
        <template #prepend>
          <v-avatar rounded="lg" size="184" color="grey-filled">
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
        <v-list-item-subtitle class="text-body-1 opacity-100">
          {{ article.title }}
        </v-list-item-subtitle>
        <v-list-item-subtitle class="text-caption opacity-100 py-4">
          <v-avatar size="16" class="mr-1">
            <v-img :src="sourceLogo" />
          </v-avatar>
          <span v-text="article.source.name" />
          <v-tooltip open-delay="300" location="bottom">
            <template #activator="{ props }">
              <span
                v-text="publishedAt.fromNow()"
                class="opacity-50 ml-2"
                v-bind="props"
              />
            </template>
            <span v-text="publishedAt.format('DD MMMM, YYYY A hh:mm')" />
          </v-tooltip>
        </v-list-item-subtitle>
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
  return dayjs(props.article.publishedAt)
})

const sourceLogo = computed(() => {
  const hostname = new URL(props.article.url).hostname
  const baseUrl = `https://t2.gstatic.com/faviconV2`
  const query = {
    client: 'SOCIAL',
    type: 'FAVICON',
    fallback_opts: 'TYPE,SIZE,URL',
    url: `https://${hostname}`,
    size: '16',
  }
  const queryString = new URLSearchParams(query).toString()
  return `${baseUrl}?${queryString}`
})
</script>

<style scoped></style>
