<!--
 * @Description: This is a description
 * @Author: Jin Tang
 * @Date: 2025-01-23 11:45:44
 * @LastEditors: Jin Tang
 * @LastEditTime: 2025-01-24 17:14:06
-->
<template>
  <div class="login-container">
    <div class="content">
      <t-card>
        <h1>Admin Custom V3 登录</h1>
        <t-form
          ref="form"
          class="login-form"
          :rules="rules"
          :data="loginForm"
          :colon="true"
          :label-width="0"
          @submit="clickLogin"
        >
          <t-form-item name="username">
            <t-input v-model="loginForm.username" clearable placeholder="请输入账户名">
              <template #prefix-icon>
                <desktop-icon />
              </template>
            </t-input>
          </t-form-item>

          <t-form-item name="password">
            <t-input
              v-model="loginForm.password"
              type="password"
              clearable
              placeholder="请输入密码"
            >
              <template #prefix-icon>
                <lock-on-icon />
              </template>
            </t-input>
          </t-form-item>

          <t-form-item>
            <t-button theme="primary" type="submit" block :loading="loginLoad">登录</t-button>
          </t-form-item>
        </t-form>
      </t-card>
    </div>
  </div>
</template>
<script setup lang="ts">
import tokenApi from '@/api/token'
import { DesktopIcon, LockOnIcon } from 'tdesign-icons-vue-next'
import { reactive, ref } from 'vue'
import type { TokenRequest } from '@/api/types'
import { useAppStore } from '@/store'
import useRouter from 'vue-router'

const appStore = useAppStore()
const loginForm = reactive<TokenRequest>({
  username: '',
  password: '',
})

const rules = {
  username: [{ required: true, message: '请输入账户名' }],
  password: [{ required: true, message: '请输入密码' }],
}

const router = useRouter()
const loginLoad = ref<boolean>(false)
const clickLogin = async ({ validateResult }: SubmitContext) => {
  if (validateResult !== true) {
    return
  }
  loginLoad.value = true
  try {
    await appStore.login(loginForm)
    await MessagePlugin.success('登陆成功')
    router.push({ name: 'dashboard' })
  } finally {
    loginLoad.value = false
  }
}
</script>

<style lang="less" scoped>
.login-container {
  width: 100vw;
  height: 100vh;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  .content {
    width: 400px;
    h1 {
      text-align: center;
    }
    .login-form {
      margin: 20px 0;
    }
  }
}
</style>
