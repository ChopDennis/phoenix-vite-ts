<script lang="ts" setup="props">
import { ref } from 'vue'
import { useStore } from '@/store'
import { useRoute } from 'vue-router'

import router from '@/router'

const store = useStore()
const dialogFormVisible = ref(false)
function click() {
  dialogFormVisible.value = true
  router.push('/auth/login')
}

const route = useRoute()
dialogFormVisible.value = route.params.redirect === 'true'

</script>
<template>
  <div class="px-3">
    <el-button
      type="text"
      @click="click"
    >
      open a Form nested Dialog
    </el-button>
    <el-dialog
      v-model="dialogFormVisible"
      :title="route.name?.toString()"
      :width="320"
    >
      <router-view />
    </el-dialog>
  </div>
  <el-card>
    <p>
      {{ store.state.auth.login.jwt }}
    </p>
    <p>
      {{ store.state.auth.login.user.email }}
    </p>
  </el-card>
</template>
<style>
</style>
