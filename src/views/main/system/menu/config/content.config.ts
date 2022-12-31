const contentConfig = {
  pageName: 'menu',
  header: {
    title: '菜单列表',
    btnTitle: '新建菜单',
    hideBtn: true
  },
  propsList: [
    {
      type: 'normal',
      label: '菜单名称',
      prop: 'name',
      width: '180px'
    },
    {
      type: 'normal',
      label: '级别',
      prop: 'type',
      width: '100px'
    },
    {
      type: 'normal',
      label: '菜单url',
      prop: 'url',
      width: '130px'
    },
    {
      type: 'normal',
      label: '菜单icon',
      prop: 'icon',
      width: '150px'
    },
    {
      type: 'normal',
      label: '权限',
      prop: 'permission',
      width: '150px'
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
    }
  ],
  childrenTree: {
    rowKey: 'id'
  }
}

export default contentConfig
