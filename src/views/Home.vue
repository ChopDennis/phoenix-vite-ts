<script setup lang="ts">
import { useStore } from '@/store'
import { computed, ref } from 'vue'

const store = useStore()
const counter = computed(() => store.state.home.count)
const handleClick = () => {
  store.commit('home/add')
}
const msg = ref('Hello Vite.')
</script>
<template>
  <h1>{{ msg }}</h1>
  <p>{{ counter }}</p>

  <button @click="handleClick">
    click
  </button>
  <button to="login">
    to
  </button>
</template>

<style scoped></style>
