<template>
  <div class="ui-kit">
    <div>12312</div>
    <s-button>Привет</s-button>

    <client-only>
      <div v-if="isMobile" class="content">
        <h1>I'm mobile</h1>
      </div>
    </client-only>

    <h1> {{ t('msg.welcome') }} </h1>

    <h2>Hello, it's blog </h2>
    <h3>My messages</h3>
    <h4>Test message</h4>
  </div>
</template>

<script lang="ts" setup>
import { useScreen } from 'shared/lib/composables'
import { SButton } from 'shared/ui'

definePageMeta({
  title: 'Главная страница',
})

const { t } = useI18n()
const { isMobile } = useScreen()
</script>
