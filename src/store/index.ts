import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'

import { home, homeState } from './home'
import { auth, authState } from './auth'

interface Module {
  home: homeState
  auth: authState
}

export const key: InjectionKey<Store<Module>> = Symbol()

export const store = createStore({
  modules: {
    home,
    auth,
  },
})

export function useStore() {
  return baseUseStore(key)
}
