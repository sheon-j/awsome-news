<template>
  <v-app>
    <app-header />
    <v-main>
      <v-container class="app-container">
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue'
</script>

<style scoped>
.app-container {
  max-width: 1440px;
}
</style>
