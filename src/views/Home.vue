<script setup lang="ts">
import { useStore } from '@/store'
import { computed, ref } from 'vue'

const store = useStore()
const counter = computed(() => store.state.home.count)
const handleClick = () => {
  store.commit('home/add')
}
const msg = ref(' The website is temporarily suspended.')
</script>
<template>
  <h1>{{ msg }}</h1>
  <img
    src="@/assets/icon-phoenix-group.png"
    width="150"
    height="150"
  >
</template>

<style scoped></style>
