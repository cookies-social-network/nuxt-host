import { NuxtSSRContext } from 'nuxt/app'
import { ComputedRef, ToRefs } from 'vue'

export type _NuxtApp = NuxtSSRContext['nuxt']

export type Screen = {
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

export type UseScreenReturnType = ToRefs<Screen>
