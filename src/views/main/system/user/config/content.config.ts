const contentConfig = {
  pageName: 'users',
  header: {
    title: '用户列表',
    btnTitle: '新建用户'
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
      label: '用户名',
      prop: 'name',
      width: '130px'
    },
    {
      type: 'normal',
      label: '真实姓名',
      prop: 'realname',
      width: '130px'
    },
    {
      type: 'normal',
      label: '手机号码',
      prop: 'cellphone',
      width: '130px'
    },
    {
      type: 'custom',
      label: '状态',
      prop: 'enable',
      width: '80px',
      slotName: 'enable'
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
