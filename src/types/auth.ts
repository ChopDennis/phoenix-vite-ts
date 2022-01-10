export interface LoginFormat {
  identifier: string
  password: string
}

export interface ResetFormat {
  code: string,
  password: string,
  passwordConfirmation: string,
}

export const authRules = {
  identifier: [
    {
      required: true,
      message: 'Please input your email.',
      trigger: 'blur',
    },
  ],
  password: [
    {
      required: true,
      message: 'Please input your password.',
      trigger: 'blur',
    },
  ],
}

export const loginForm = {
  identifier: '',
  password: '',
} as LoginFormat

export const resetForm = {
  code: '',
  password: '',
  passwordConfirmation: ''
} as ResetFormat