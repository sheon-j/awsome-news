<template>
  <v-dialog :model-value="modelValue" width="500" @update:model-value="close">
    <v-card rounded="lg">
      <v-card-item class="pb-0">
        <template #title>
          <source-logo :source="article.url" size="22" />
          <span v-text="article.source.name" />
        </template>
        <template #append>
          <v-icon :icon="mdiClose" size="small" @click="close" />
        </template>
      </v-card-item>
      <v-card-title class="px-6 text-wrap">
        {{ article.title }}
      </v-card-title>
      <v-card-subtitle class="px-6">
        {{ dayjs(article.publishedAt).format('DD MMMM, YYYY A hh:mm') }}
      </v-card-subtitle>
      <v-card-subtitle v-if="article.author" class="px-6 pt-3 opacity-100">
        <v-icon
          :icon="mdiAccountCircle"
          class="mr-1"
          size="large"
          color="grey"
        />
        <span v-text="article.author" />
      </v-card-subtitle>
      <v-divider class="mt-3" />
      <v-card-text v-if="article.urlToImage" class="pb-0">
        <v-img :src="article.urlToImage" rounded="lg" />
      </v-card-text>
      <v-card-text v-text="content" class="text-body-1" />
      <v-card-actions class="pa-4">
        <v-btn variant="plain" @click="open" class="text-none">
          <v-icon :icon="mdiLinkVariant" class="mr-1" />
          Read more
        </v-btn>
        <v-spacer />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import SourceLogo from './SourceLogo.vue'
import { mdiAccountCircle, mdiClose, mdiLinkVariant } from '@mdi/js'
import type { Article } from '../types'
import dayjs from 'dayjs'

const props = defineProps<{
  modelValue: boolean
  article: Article
}>()

const emit = defineEmits(['update:modelValue'])

const close = () => {
  emit('update:modelValue', false)
}

const open = () => {
  window.open(props.article.url, '_blank')
}

const content = computed(() => {
  return props.article?.content
    ? props.article.content.replace(/\[\+\d+\s*chars\]/g, '')
    : '(No content available)'
})
</script>
