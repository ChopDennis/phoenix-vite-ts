<script setup lang="ts">
import { useStore } from '@/store'
import { computed, ref } from 'vue'

const store = useStore()
const counter = computed(() => store.state.home.count)
const handleClick = () => {
  store.commit('home/add')
}
const title = ref(' The website is temporarily suspended.')
const msg = ref('If you have any questions, please contact us - ')
</script>
<template>
  <div class="container mx-auto px-4 flex justify-center  h-screen items-center">
    <div>
      <img
        class="mx-auto"
        src="@/assets/icon-phoenix-group.png"
        width="150"
        height="150"
      >
      <h1 class="text-3xl mt-3 font-bold font-serif tracking-tight">
        {{ title }}
      </h1>
      <p class="font-sans font-thin">
        {{ msg }}<a
          class="text-blue-500 hover:underline"
          href="mailto:phoenixgroupasia@gmail.com"
        >phoenixgroupasia@gmail.com</a>
      </p>
    </div>
  </div>
</template>

<style scoped></style>
