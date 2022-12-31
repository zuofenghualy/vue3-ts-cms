import { defineStore } from 'pinia'
import {
  postPageListData,
  deletePageById,
  createPageData,
  editPageData
} from '@/service/main/system/system'

interface ISystemState {
  pageList: any[]
  pageTotalCount: number
  currentPage: number
  pageSize: number
}

const useSystemStore = defineStore('system', {
  state: (): ISystemState => ({
    pageList: [],
    pageTotalCount: 0,
    currentPage: 1,
    pageSize: 10
  }),
  actions: {
    async postPageListAction(pageName: string, queryInfo: any) {
      const { data: res } = await postPageListData(pageName, queryInfo)
      const { list, totalCount } = res
      this.pageList = list
      this.pageTotalCount = totalCount
    },
    async deletePageByIdAction(pageName: string, id: number) {
      await deletePageById(pageName, id)
      this.postPageListAction(pageName, { size: 10, offset: 0 })
      this.currentPage = 1
      this.pageSize = 10
    },
    async createPageDataAction(pageName: string, userInfo: any) {
      await createPageData(pageName, userInfo)
      this.postPageListAction(pageName, { size: 10, offset: 0 })
      this.currentPage = 1
      this.pageSize = 10
    },
    async editPageDataAction(pageName: string, id: number, userInfo: any) {
      await editPageData(pageName, id, userInfo)
      this.postPageListAction(pageName, { size: 10, offset: 0 })
      this.currentPage = 1
      this.pageSize = 10
    }
  }
})

export default useSystemStore
