<template>
  <v-app-bar
    flat
    scroll-behavior="hide"
    scroll-threshold="10"
    class="bg-transparent"
    style="backdrop-filter: blur(30px)"
  >
    <v-app-bar-title class="text-center">
      <v-avatar color="inverse" size="x-small" rounded="lg" class="mr-1">
        <v-icon size="x-small" :icon="mdiNewspaperVariantOutline" />
      </v-avatar>
      <span v-text="APP_NAME" />
    </v-app-bar-title>
  </v-app-bar>
</template>

<script setup lang="ts">
import { mdiNewspaperVariantOutline } from '@mdi/js'

const APP_NAME = 'Awesome News'
</script>

<style scoped></style>
