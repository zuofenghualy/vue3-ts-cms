import type { RouteRecordRaw } from 'vue-router'

function loadLocalRoutes() {
  const localRoutes: RouteRecordRaw[] = []
  const files = import.meta.glob('@/router/main/**/*.ts', { eager: true })
  for (const key in files) {
    const file: any = files[key]
    localRoutes.push(file.default)
  }
  return localRoutes
}

export let firstMenu: any = null
export function mapMenusToRoutes(userMenus: any[]) {
  const routes: RouteRecordRaw[] = []
  const localRoutes = loadLocalRoutes()
  for (const subMenu of userMenus) {
    for (const menuItem of subMenu.children) {
      const url = menuItem.url
      const route = localRoutes.find((item) => item.path === url)
      if (route) {
        // 给route的顶层菜单添加重定向功能
        if (!routes.find((item) => item.path === subMenu.url)) {
          routes.push({ path: subMenu.url, redirect: menuItem.url })
        }
        // 添加路由
        routes.push(route)
        // 第一个菜单
        if (!firstMenu) firstMenu = menuItem
      }
    }
  }

  return routes
}

export function mapPathToMenu(path: string, userMenus: any[]) {
  for (const subMenu of userMenus) {
    for (const menuItem of subMenu.children) {
      if (menuItem.url === path) {
        return menuItem
      }
    }
  }
}

export function mapPathToBreadcrumb(path: string, userMenus: any[]) {
  const breadcrumb: any[] = []
  for (const subMenu of userMenus) {
    for (const menuItem of subMenu.children) {
      if (menuItem.url === path) {
        breadcrumb.push(subMenu)
        breadcrumb.push(menuItem)
      }
    }
  }
  return breadcrumb
}

export function mapMenusToPermissions(menuList: any[]) {
  const permissions: string[] = []

  function getPermissions(data: any) {
    for (const item of data) {
      if (item.children) {
        getPermissions(item.children)
      } else if (item.permission) {
        permissions.push(item.permission)
      }
    }
  }
  getPermissions(menuList)

  return permissions
}
