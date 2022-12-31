const contentConfig = {
  pageName: 'role',
  header: {
    title: '角色列表',
    btnTitle: '新建角色'
  },
  propsList: [
    {
      type: 'selection',
      width: '50px'
    },
    {
      type: 'index',
      label: '序号',
      width: '60px'
    },
    {
      type: 'normal',
      label: '角色名称',
      prop: 'name',
      width: '130px'
    },
    {
      type: 'normal',
      label: '角色权限',
      prop: 'intro',
      width: '130px'
    },
    {
      type: 'time',
      label: '创建时间',
      prop: 'createAt'
    },
    {
      type: 'time',
      label: '更新时间',
      prop: 'updateAt'
    },
    {
      type: 'handler',
      label: '操作',
      width: '100px'
    }
  ]
}

export default contentConfig
