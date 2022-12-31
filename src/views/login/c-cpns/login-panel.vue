<template>
  <div class="login-panel">
    <!-- 标题 -->
    <h1 class="title">后台管理系统</h1>

    <!-- 登录选项 -->
    <div class="tabs">
      <el-tabs type="border-card" stretch v-model="activeName">
        <!-- 账号登录 -->
        <el-tab-pane name="account">
          <!-- 标题 -->
          <template #label>
            <span class="custom-tabs-label">
              <el-icon><User /></el-icon>
              <span>账号登录</span>
            </span>
          </template>
          <!-- 内容 -->
          <PaneAccount ref="accountRef" />
        </el-tab-pane>

        <!-- 手机登录 -->
        <el-tab-pane name="phone">
          <!-- 标题 -->
          <template #label>
            <span class="custom-tabs-label">
              <el-icon><Iphone /></el-icon>
              <span>手机登录</span>
            </span>
          </template>
          <!-- 内容 -->
          <PanePhone />
        </el-tab-pane>
      </el-tabs>
    </div>

    <!-- 选项 -->
    <div class="controls">
      <el-checkbox v-model="isRememberPwd" label="记住密码" size="large" />
      <el-link type="primary">忘记密码</el-link>
    </div>

    <!-- 登录按钮 -->
    <el-button
      class="loginButton"
      type="primary"
      size="large"
      @click="loginButtonAction"
    >
      立即登录
    </el-button>
  </div>
</template>

<script setup lang="ts">
import { localCache } from '@/utils/cache'
import { ref, watch } from 'vue'
import PaneAccount from './pane-account.vue'
import PanePhone from './pane-phone.vue'

const activeName = ref('account')
const accountRef = ref<InstanceType<typeof PaneAccount>>()
const isRememberPwd = ref<boolean>(
  localCache.getCache('isRememberPwd') ?? false
)
watch(isRememberPwd, (newValue) => {
  localCache.setCache('isRememberPwd', newValue)
})

function loginButtonAction() {
  if (activeName.value === 'account') {
    // 账号登录
    accountRef.value?.loginAction(isRememberPwd.value)
  } else if (activeName.value === 'phone') {
    console.log('手机登录')
  }
}
</script>

<style lang="less" scoped>
.login-panel {
  width: 330px;
  margin-bottom: 150px;

  .title {
    text-align: center;
    margin-bottom: 15px;
  }

  .custom-tabs-label {
    display: flex;
    align-items: center;
    justify-content: center;

    .text {
      margin-left: 5px;
    }
  }

  .controls {
    margin-top: 12px;
    display: flex;

    justify-content: space-between;
    align-items: center;
  }

  .loginButton {
    margin-top: 10px;
    width: 100%;
  }
}

.custom-tabs-label {
  display: flex;
  align-items: center;
}
</style>
