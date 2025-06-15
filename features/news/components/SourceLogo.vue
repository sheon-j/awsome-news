<template>
  <v-avatar :size="size" class="mr-1">
    <v-img :src="sourceLogo" />
  </v-avatar>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    source: string
    size?: number | string
  }>(),
  {
    size: 16,
  }
)

const sourceLogo = computed(() => {
  const hostname = new URL(props.source).hostname
  const baseUrl = `https://t2.gstatic.com/faviconV2`
  const query = {
    client: 'SOCIAL',
    type: 'FAVICON',
    fallback_opts: 'TYPE,SIZE,URL',
    url: `https://${hostname}`,
  }
  const queryString = new URLSearchParams(query).toString()
  return `${baseUrl}?${queryString}`
})
</script>

<style scoped></style>
