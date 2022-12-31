import { defineStore } from 'pinia'
import {
  getEntireRoles,
  getEntireDepartments,
  getEntireMenus
} from '@/service/main/main'

interface IMainState {
  entireRoles: any[]
  entireDepartments: any[]
  entireMenus: any[]
}

const useMainStore = defineStore('main', {
  state: (): IMainState => ({
    entireRoles: [],
    entireDepartments: [],
    entireMenus: []
  }),
  actions: {
    async fetchEntireDataAction() {
      const { data: entireRolesRes } = await getEntireRoles()
      const { data: entireDepartmentsRes } = await getEntireDepartments()
      const { data: entireMenusRes } = await getEntireMenus()
      this.entireRoles = entireRolesRes.list
      this.entireDepartments = entireDepartmentsRes.list
      this.entireMenus = entireMenusRes.list
    }
  }
})

export default useMainStore
