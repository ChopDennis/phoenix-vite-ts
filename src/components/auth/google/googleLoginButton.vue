<script lang="ts" setup>
const requestSubmit = () => {
  console.log('click')
}
</script>
<template>
  <el-button @click="requestSubmit()">
    Login with Google
  </el-button>
</template>
<style>
</style>