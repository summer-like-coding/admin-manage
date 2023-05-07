// 用户管理
const users: AuthRoute.Route = {
  name: 'users',
  path: '/users',
  component: 'basic',
  children: [
    {
      name: 'users_manage',
      path: '/users/manage',
      component: 'self',
      meta: {
        title: '角色管理',
        permissions: ['super'],
        icon: 'fluent:person-edit-24-filled'
      }
    },
    {
      name: 'users_list',
      path: '/users/list',
      component: 'self',
      meta: {
        title: '用户列表',
        icon: 'fluent:people-list-24-filled'
      }
    },
    {
      name: 'users_permission',
      path: '/users/permission',
      component: 'self',
      meta: {
        title: '权限列表',
        icon: 'fluent:task-list-24-regular'
      }
    }
  ],
  meta: {
    title: '用户管理',
    icon: 'fluent:person-28-regular',
    order: 2
  }
};

export default users;
