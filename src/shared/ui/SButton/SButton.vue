<template>
  <component :is="props.tag" :disabled="props.disabled || props.loading" :class="classes" v-bind="$attrs" v-on="$attrs">
    <span v-if="slots.prefix" class="s-button__prefix">
      <slot name="prefix" />
    </span>
    <!-- пустой класс нужен для управления loading -->
    <span class="s-button__content">
      <slot />
    </span>
    <span v-if="slots.suffix" class="s-button__suffix">
      <slot name="suffix" />
    </span>
  </component>
</template>

<script lang="ts" setup>
type Props = {
  tag?: 'button' | 'a'
  size?: 'md' | 'sm'
  loading?: boolean
  disabled?: boolean
  // DEBT: реализовать в одном стиле линки. Либо через класс .link, либо через компонент s-button. Как вариант можно завести переменные чтобы прокинуть в оба варианта
  appearance?: 'primary' | 'secondary' | 'tertiary' | 'link'
  onlyIcon?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  tag: 'button',
  appearance: 'primary',
  loading: false,
  disabled: false,
  size: 'md',
  onlyIcon: false,
})

const slots = useSlots()

const classes = computed(() => {
  return [
    's-button',
    `s-button--${props.appearance}`,
    `s-button--${props.size}`,
    {
      's-button--prefix': slots.prefix,
      's-button--suffix': slots.suffix,
      's-button--loading': props.loading,
      's-button--only-icon': props.onlyIcon,
    },
  ]
})
</script>

<style lang="scss" scoped>
.s-button {
  --color-white: #fff;

  color: var(--color-white);
}
</style>
