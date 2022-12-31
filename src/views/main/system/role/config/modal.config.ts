const modalConfig: any = {
  pageName: 'role',
  header: {
    newTitle: '新建角色',
    editTitle: '编辑角色'
  },
  formItem: [
    {
      type: 'input',
      label: '角色名称',
      prop: 'name',
      placeholder: '请输入角色名称',
      initialValue: ''
    },
    {
      type: 'input',
      label: '角色权限',
      prop: 'intro',
      placeholder: '请输入角色权限'
    },
    {
      type: 'custom',
      slotName: 'manuList'
    }
  ]
}

export default modalConfig
