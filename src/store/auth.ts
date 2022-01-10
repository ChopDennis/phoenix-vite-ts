import router from '@/router'
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { Module } from 'vuex'
const API_BASE_URL = 'https://strapi.machi.codes'

const callAPI = (config: AxiosRequestConfig) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${API_BASE_URL}${config.url}`, config.data)
      .then((response: AxiosResponse) => {
        resolve(response.data)
      })
      .catch((e) => {
        reject(e)
      })
  })
}

export interface authState {
  login: {
    jwt: string
    user: {
      blocked: boolean
      confirmed: boolean
      createdAt: string
      email: string
      id: string
      provider: string
      role: object
      updatedAt: string
      username: string
    }
  }
}

export const auth: Module<authState, unknown> = {
  namespaced: true,
  state: {
    login: {
      jwt: '',
      user: {
        blocked: false,
        confirmed: false,
        createdAt: '',
        email: '',
        id: '',
        provider: '',
        role: {},
        updatedAt: '',
        username: '',
      },
    },
  },
  mutations: {
    SET_LOGIN_AUTH(state, res) {
      state.login = res
    },
  },
  actions: {
    async a_loginAuth({ commit }, data) {
      try {
        const res = await callAPI({
          url: '/auth/local',
          data,
        })

        console.log(res)
        commit('SET_LOGIN_AUTH', res)
        router.push({ name: 'Home' })
      } catch (error: any) {
        console.log(error.response)
      }
    },
    async a_registerAuth({ commit }, data) {
      const res = await callAPI({
        url: '/auth/local/register',
        data,
      })
      commit('SET_LOGIN_AUTH', res)
    },
    async a_forgotPassword({ commit }, email) {
      const data = {
        email: email,
        url: '/api/admin/plugins/users-permissions/auth/reset-password',
      }
      const res = await callAPI({
        url: '/auth/forgot-password',
        data,
      })
      return res
    },
    async a_resetPassword({ commit }, data) {
      const res = await callAPI({
        url: '/auth/reset-password',
        data,
      })
      commit('SET_LOGIN_AUTH', res)
      return { ok: true }
    },
  },
}
