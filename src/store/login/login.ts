import { defineStore } from 'pinia'
import { accountLogin, getRoleMenus, getUserById } from '@/service/login/login'
import { localCache } from '@/utils/cache'
import { mapMenusToPermissions } from '@/utils/map-menus'
import router from '@/router'
import { mapMenusToRoutes } from '@/utils/map-menus'

interface ILoginState {
  token: string
  userInfo: any
  userMenus: any
  permissions: string[]
}

const useLoginStore = defineStore('login', {
  state: (): ILoginState => ({
    token: '',
    userInfo: {},
    userMenus: [],
    permissions: []
  }),

  actions: {
    async loginAccountAction(account: { name: string; password: string }) {
      // 账号登录
      const { data: loginResult } = await accountLogin(account)
      const id = loginResult.id
      this.token = loginResult.token
      localCache.setCache('token', this.token)
      // 获取登录用户的详细信息
      const { data: userInfoResult } = await getUserById(id)
      this.userInfo = userInfoResult
      // 获取角色权限
      const { data: userMenusResult } = await getRoleMenus(id)
      this.userMenus = userMenusResult
      // 获取登录用户所有按钮权限
      const permissions = mapMenusToPermissions(userMenusResult)
      this.permissions = permissions
      // 本地缓存
      localCache.setCache('userInfo', userInfoResult)
      localCache.setCache('userMenus', userMenusResult)
      // 动态路由
      const routes = mapMenusToRoutes(userMenusResult)
      routes.forEach((route) => router.addRoute('main', route))
      // 页面跳转
      router.push('/main')
    },

    loadLocalCacheAction() {
      const token = localCache.getCache('token')
      const userInfo = localCache.getCache('userInfo')
      const userMenus = localCache.getCache('userMenus')
      if (token && userInfo && userMenus) {
        this.token = token
        this.userInfo = userInfo
        this.userMenus = userMenus
        // 获取登录用户所有按钮权限
        const permissions = mapMenusToPermissions(userMenus)
        this.permissions = permissions
        // 动态路由
        const routes = mapMenusToRoutes(userMenus)
        routes.forEach((route) => router.addRoute('main', route))
      }
    }
  }
})

export default useLoginStore
