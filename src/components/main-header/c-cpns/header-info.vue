<template>
  <div class="header-info">
    <!-- 图标 -->
    <div class="operation">
      <el-icon size="large"><Search /></el-icon>
      <el-icon size="large"><ChatDotSquare /></el-icon>
      <el-icon size="large"><Setting /></el-icon>
    </div>
    <!-- 下拉菜单 -->
    <div class="dropdown">
      <el-dropdown>
        <span class="el-dropdown-link">
          <el-avatar :size="30" :icon="UserFilled" />
          <span class="name">{{ resetName }}</span>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="handleExitClick"
              >退出系统</el-dropdown-item
            >
            <el-dropdown-item>个人信息</el-dropdown-item>
            <el-dropdown-item>修改密码</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import useLoginStore from '@/store/login/login'
import { localCache } from '@/utils/cache'
import { UserFilled } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'

// 用户名
const loginStore = useLoginStore()
const name = loginStore.userInfo.realname
const resetName = name === 'coderwhy' ? 'zuo' : name

// 退出登录
const router = useRouter()
function handleExitClick() {
  localCache.removeCache('token')
  router.push('./login')
}
</script>

<style lang="less" scoped>
.header-info {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
  .operation {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .el-icon {
      margin-right: 10px;
    }
  }
}

.el-dropdown-link {
  display: flex;
  align-items: center;
  justify-content: center;

  .name {
    margin-left: 5px;
    font-size: medium;
  }
}

:global(.el-dropdown-menu__item) {
}
</style>
