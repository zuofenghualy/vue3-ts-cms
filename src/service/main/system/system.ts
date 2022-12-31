import hyRequest from '@/service'

export function postPageListData(pageName: string, queryInfo: any) {
  return hyRequest.post({
    url: `/${pageName}/list`,
    data: queryInfo
  })
}

export function deletePageById(pageName: string, id: number) {
  return hyRequest.delete({
    url: `/${pageName}/${id}`
  })
}

export function createPageData(pageName: string, userInfo: any) {
  return hyRequest.post({
    url: `/${pageName}`,
    data: userInfo
  })
}

export function editPageData(pageName: string, id: number, userInfo: any) {
  return hyRequest.patch({
    url: `/${pageName}/${id}`,
    data: userInfo
  })
}
