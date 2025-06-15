<template>
  <v-app-bar
    flat
    scroll-behavior="hide"
    scroll-threshold="10"
    class="bg-transparent"
    style="backdrop-filter: blur(30px)"
  >
    <v-app-bar-title class="text-center">
      <v-img :src="logo" height="32" />
    </v-app-bar-title>
  </v-app-bar>
</template>

<script setup lang="ts">
import logo from '@/assets/logo.svg'
</script>

<style scoped></style>
