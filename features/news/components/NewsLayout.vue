<template>
  <v-card variant="text" rounded="lg" :title="title" :subtitle="subtitle">
    <v-row dense class="pa-4">
      <slot />
    </v-row>
  </v-card>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
}>()
</script>

<style scoped></style>
