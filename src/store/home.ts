import { Module } from 'vuex'

export interface homeState {
  count: number
}

export const home:Module<homeState, unknown>= {
  namespaced: true,
  state: { count: 1 },
  mutations: {
    add(state) {
      state.count++
    },
  },
}
