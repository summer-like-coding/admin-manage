const picture: AuthRoute.Route = {
  name: 'picture',
  path: '/picture',
  component: 'basic',
  children: [
    {
      name: 'picture_upload',
      path: '/picture/upload',
      component: 'self',
      meta: {
        title: '图片上传',
        icon: 'fluent:image-24-filled'
      }
    },
    {
      name: 'picture_list',
      path: '/picture/list',
      component: 'self',
      meta: {
        title: '图片列表',
        icon: 'fluent:image-24-filled'
      }
    },
    {
      name: 'picture_group',
      path: '/picture/group',
      component: 'self',
      meta: {
        title: '分组管理',
        icon: 'fluent:group-list-24-filled'
      }
    }
  ],
  meta: {
    title: '图层管理',
    icon: 'fluent:wallpaper-24-filled',
    order: 10
  }
};

export default picture;
