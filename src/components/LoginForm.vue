<script lang="ts" setup>
import { Avatar, Key } from '@element-plus/icons'
import { reactive, ref } from 'vue'
import { useStore } from '@/store'
import { loginForm, authRules } from '@/types/auth'

const store = useStore()
const loginFormControl = ref()
const login = reactive(loginForm)
const rules = reactive(authRules)
const remember = ref(false)
const LoginButton = () => {
  loginFormControl.value.validate((valid: boolean) => {
    valid
      ? requestLogin()
      : console.log('error submit!!')
  })
}
const requestLogin = ()=>{
  store.dispatch('auth/a_loginAuth', login)
}
</script>
<template>
  <div>
    <el-form
      ref="loginFormControl"
      :rules="rules"
      :model="login"
      label-position="top"
    >
      <el-row>
        <el-col :span="4">
          <el-icon>
            <avatar />
          </el-icon>
        </el-col>
        <el-col :span="20">
          <el-form-item prop="identifier">
            <el-input
              v-model="login.identifier"
              placeholder="Type your e-mail."
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="4">
          <el-icon>
            <key />
          </el-icon>
        </el-col>
        <el-col :span="20">
          <el-form-item prop="password">
            <el-input
              v-model="login.password"
              placeholder="Type your password."
              type="password"
              autocomplete="off"
            />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div class="w-9/12">
      <el-row justify="space-between">
        <el-col :span="8">
          <el-checkbox
            v-model="remember"
            label="Remember Me"
          />
        </el-col>
        <el-col :span="8">
          <router-link to="/auth/forgot">
            <el-button
              type="text"
              class="text-gray-400"
            >
              Forgot your password?
            </el-button>
          </router-link>
        </el-col>
      </el-row>
    </div>
    <el-button
      type="primary"
      class="w-full my-6"
      @click="LoginButton"
    >
      Login
    </el-button>
    <span>Not a member?&nbsp;</span>
    <el-button type="text">
      Sign up
    </el-button>
  </div>
</template>
<style>
</style>
