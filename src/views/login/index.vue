<!--
 * @Description: This is a description
 * @Author: Jin Tang
 * @Date: 2025-01-23 11:45:44
 * @LastEditors: Jin Tang
 * @LastEditTime: 2025-01-23 17:39:14
-->
<template>
  <div>
    登录
    <t-button theme="primary">确定</t-button>
  </div>
</template>
<script setup lang="ts">
import tokenApi from '@/api/token'
import { onMounted, reactive } from 'vue'

const loginForm = reactive<TokenRequest>({
  username: 'admin',
  password: 'password',
})
onMounted(() => {
  tokenApi.createToken(loginForm)
})
</script>

<style lang="scss" scoped></style>
