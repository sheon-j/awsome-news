<template>
  <v-card variant="text" rounded="lg" class="mb-8">
    <v-card-item :title="title" :subtitle="subtitle" class="bg-transparent" />
    <v-card-text>
      <v-row dense>
        <slot />
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
}>()
</script>

<style scoped></style>
