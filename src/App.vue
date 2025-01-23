<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

// 生命周期钩子
onMounted(() => {
  console.log('App组件已挂载')
})
</script>
