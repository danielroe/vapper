import Vue, { ComponentOptions } from 'vue'
import { MetaInfo, VueMetaPlugin } from 'vue-meta'

declare module 'vue/types/vue' {
  interface Vue {
    $$type: 'server' | 'client'
    error: Error
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    head?: MetaInfo
  }
}