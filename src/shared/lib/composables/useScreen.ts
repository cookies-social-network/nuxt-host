import { ToRefs } from 'vue'

type Screen = {
  sizes: string
  width: number
  height: number
  isAlbumOrient: ComputedRef<boolean>
  isMobile: ComputedRef<boolean>
  isTablet: ComputedRef<boolean>
  isMobileOrTablet: ComputedRef<boolean>
  isLaptop: ComputedRef<boolean>
  isDesktop: ComputedRef<boolean>
}

type UseScreenReturnType = ToRefs<Screen>

export function useScreen(): UseScreenReturnType {
  const nuxtApp = useNuxtApp()

  return nuxtApp.vueApp.config.globalProperties.$screen as UseScreenReturnType
}
