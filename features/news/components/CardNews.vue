<template>
  <v-card variant="text" rounded="lg" @click="dialog = true">
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
          <source-logo :source="article.url" />
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
    <news-dialog v-model="dialog" :article="article" />
  </v-card>
</template>

<script setup lang="ts">
import NewsDialog from './NewsDialog.vue'
import SourceLogo from './SourceLogo.vue'
import type { Article } from '../types'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

const props = defineProps<{
  article: Article
}>()

const dialog = ref(false)

const publishedAt = computed(() => {
  return dayjs(props.article.publishedAt)
})
</script>

<style scoped></style>
