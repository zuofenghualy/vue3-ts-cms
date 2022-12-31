const contentConfig = {
  pageName: 'department',
  header: {
    title: '部门列表',
    btnTitle: '新建部门'
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
      label: '部门名称',
      prop: 'name',
      width: '130px'
    },
    {
      type: 'normal',
      label: '部门领导',
      prop: 'leader',
      width: '130px'
    },
    {
      type: 'normal',
      label: '上级部门',
      prop: 'parentId',
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
