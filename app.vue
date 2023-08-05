<template>
  <nuxt-layout>
    <nuxt-page />
  </nuxt-layout>
</template>

<script lang="ts" setup>
const route = useRoute()

// TODO: Подумать над локализацией
useServerSeoMeta({
  title: route.meta.title ?? '',
  ogTitle: 'Cookies network',
  description: 'Описание социальной сети', // TODO: Подумать над локализацией
  ogDescription: 'Описание социальной сети',
  ogImage: 'https://github.com/miirsery/media/assets/57665901/f8647b49-7dda-4eaf-a868-1e6caf3096b0',
})

useHead({
  meta: [{ property: 'og:title', content: `${route.meta.title}` }],
})
</script>
