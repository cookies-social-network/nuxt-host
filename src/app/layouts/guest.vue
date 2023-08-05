<template>
  <div class="guest-layout">
    <div class="guest-layout__container">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.guest-layout {
  width: 100%;
  height: 100%;

  &__container {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
