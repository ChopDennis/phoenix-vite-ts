<script lang="ts" setup>
import { useStore } from '@/store'
import { ref } from 'vue'
const store = useStore()
const email = ref('')
const success = ref(false)
const rules = ref({
  email: [
    {
      required: true,
      message: 'Please input your email.',
      trigger: 'blur',
    },
  ],
})
const forgotPassword = async () => {
  const res = await store.dispatch('auth/a_forgotPassword', email.value)
  success.value = res.ok
}
</script>
<template>
  <div>
    <p
      v-if="!success"
      class="my-2"
    >
      Reset your password.
    </p>
    <p
      v-else
      class="text-green-500 my-2"
    >
      Success! Check your email.
    </p>
    <el-form :rules="rules">
      <el-form-item prop="email">
        <el-input
          v-model="email"
          placeholder="Type your Email here."
        />
      </el-form-item>
    </el-form>
    <el-button
      type="info"
      class="w-full"
      :disabled="!email"
      @click="forgotPassword"
    >
      Submit
    </el-button>
    <router-link to="/auth/login">
      <el-button type="text">
        Back to login
      </el-button>
    </router-link>
  </div>
</template>
<style>
</style>