<template>
  <div class="pane-account">
    <el-form
      label-width="80"
      :model="account"
      :rules="accountRules"
      style="width: 270px"
      ref="formRef"
    >
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { ElMessage } from 'element-plus'
import type { FormRules, FormInstance } from 'element-plus'
import useLoginStore from '@/store/login/login'
import { localCache } from '@/utils/cache'

// account数据
const account = reactive({
  name: localCache.getCache('name') ?? '',
  password: localCache.getCache('password') ?? ''
})

// 校验规则
const accountRules: FormRules = {
  name: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
}

// 登录逻辑
const formRef = ref<FormInstance>()
const loginStore = useLoginStore()
function loginAction(isRememberPwd: boolean) {
  formRef.value?.validate((valid) => {
    if (valid) {
      // 获取账号密码
      let name = account.name
      let password = account.password
      let resetName: string
      switch (name) {
        case 'zuo':
          resetName = 'coderwhy'
          break
        case 'demo':
          resetName = 'coderdemo'
          break
        case 'test':
          resetName = 'codertest'
          break
        default:
          resetName = name
          break
      }
      // 向服务器发送请求
      loginStore
        .loginAccountAction({ name: resetName, password })
        .then(() => {
          // 是否记住密码
          if (isRememberPwd) {
            localCache.setCache('name', name)
            localCache.setCache('password', password)
          } else {
            localCache.removeCache('name')
            localCache.removeCache('password')
          }
        })
        .catch((message) => {
          console.log(message)
          ElMessage.error('登录失败')
        })
    } else {
      ElMessage.error('登录失败')
    }
  })
}

defineExpose({
  loginAction
})
</script>

<style lang="less" scoped>
.pane-account {
}
</style>
