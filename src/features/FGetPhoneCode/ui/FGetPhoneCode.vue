<template>
  <s-button @click="handleGetUsers">{{ $t('phone.buttonText') }}</s-button>
</template>

<script lang="ts" setup>
import { getCode } from '@/features/FGetPhoneCode/api'

import { SButton } from '@/shared/ui'

const handleGetUsers = async () => {
  await getCode()
}
</script>
