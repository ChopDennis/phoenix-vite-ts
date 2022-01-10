<script lang="ts" setup props>
import { useStore } from '@/store'
import { reactive, ref, toRefs } from 'vue'
import { resetForm } from '@/types/auth'

const props = defineProps<{
  code: string
}>()
const { code } = toRefs(props)
const store = useStore()
const ruleForm = reactive(resetForm)
const ruleFormControl = ref()

ruleForm.code = code.value

const validatePass = (
  rule: unknown,
  value = '',
  callback: (arg0?: Error) => void
) => {
  !value ? callback(new Error('Please input the password')) : callback()
  ruleForm.password
    ? ruleFormControl.value.validateField('passConfirm')
    : callback()
}

const validatePassConfirm = (
  rule: unknown,
  value = '',
  callback: (arg0?: Error) => void
) => {
  !value
    ? callback(new Error('Please input the password again'))
    : value !== ruleForm.password
      ? callback(new Error('Two inputs don\'t match!'))
      : callback()
}

const rules = reactive({
  password: [{ validator: validatePass, trigger: 'blur' }],
  passwordConfirmation: [{ validator: validatePassConfirm, trigger: 'blur' }],
})

const submitButton = () => {
  ruleFormControl.value.validate((valid: boolean) => {
    valid ? resetPassword() : console.log('error submit!!')
  })
}
const resetButton = () => {
  ruleFormControl.value.resetFields()
}

const resetPassword = async () => {
  const res = await store.dispatch('auth/a_resetPassword', ruleForm)
  res.ok ? alert('submit!') : console.error('dispatch resetPassword failed.')
}
</script>

<template>
  <el-form
    ref="ruleFormControl"
    :model="ruleForm"
    :rules="rules"
    status-icon
    label-position="top"
  >
    <el-form-item
      label="Password"
      prop="password"
    >
      <el-input
        v-model="ruleForm.password"
        type="password"
        autocomplete="off"
      />
    </el-form-item>
    <el-form-item
      label="Confirm"
      prop="passwordConfirmation"
    >
      <el-input
        v-model="ruleForm.passwordConfirmation"
        type="password"
        autocomplete="off"
      />
    </el-form-item>
    <el-button
      type="primary"
      @click="submitButton()"
    >
      Submit
    </el-button>
    <el-button @click="resetButton()">
      Reset
    </el-button>
  </el-form>
  {{ ruleForm }}
</template>

<style>
</style>