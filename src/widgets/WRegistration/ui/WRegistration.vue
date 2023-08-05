<template>
  <div class="w-registration">
    <e-registration>
      <template #getCode>
        <f-get-phone-code />
      </template>
    </e-registration>
  </div>
</template>

<script lang="ts" setup>
import { ERegistration } from 'entities/ERegistration'
import { FGetPhoneCode } from 'features/FGetPhoneCode'
</script>
