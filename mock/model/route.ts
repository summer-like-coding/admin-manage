export const routeModel: Record<Auth.RoleType, AuthRoute.Route[]> = {
  super: [
    {
      name: 'dashboard',
      path: '/dashboard',
      component: 'basic',
      children: [
        {
          name: 'dashboard_analysis',
          path: '/dashboard/analysis',
          component: 'self',
          meta: {
            title: '分析页',
            requiresAuth: true,
            icon: 'icon-park-outline:analysis'
          }
        },
        {
          name: 'dashboard_workbench',
          path: '/dashboard/workbench',
          component: 'self',
          meta: {
            title: '工作台',
            requiresAuth: true,
            icon: 'icon-park-outline:workbench'
          }
        }
      ],
      meta: {
        title: '仪表盘',
        icon: 'mdi:monitor-dashboard',
        order: 1
      }
    },
    {
      name: 'component',
      path: '/component',
      component: 'basic',
      children: [
        {
          name: 'component_button',
          path: '/component/button',
          component: 'self',
          meta: {
            title: '按钮',
            requiresAuth: true,
            icon: 'mdi:button-cursor'
          }
        },
        {
          name: 'component_card',
          path: '/component/card',
          component: 'self',
          meta: {
            title: '卡片',
            requiresAuth: true,
            icon: 'mdi:card-outline'
          }
        },
        {
          name: 'component_table',
          path: '/component/table',
          component: 'self',
          meta: {
            title: '表格',
            requiresAuth: true,
            icon: 'mdi:table-large'
          }
        }
      ],
      meta: {
        title: '组件示例',
        icon: 'cib:app-store',
        order: 3
      }
    },
    {
      name: 'plugin',
      path: '/plugin',
      component: 'basic',
      children: [
        {
          name: 'plugin_charts',
          path: '/plugin/charts',
          component: 'multi',
          children: [
            {
              name: 'plugin_charts_echarts',
              path: '/plugin/charts/echarts',
              component: 'self',
              meta: {
                title: 'ECharts',
                requiresAuth: true,
                icon: 'simple-icons:apacheecharts'
              }
            },
            {
              name: 'plugin_charts_antv',
              path: '/plugin/charts/antv',
              component: 'self',
              meta: {
                title: 'AntV',
                requiresAuth: true,
                icon: 'simple-icons:antdesign'
              }
            }
          ],
          meta: {
            title: '图表',
            icon: 'mdi:chart-areaspline'
          }
        },
        {
          name: 'plugin_map',
          path: '/plugin/map',
          component: 'self',
          meta: {
            title: '地图',
            requiresAuth: true,
            icon: 'mdi:map'
          }
        },
        {
          name: 'plugin_video',
          path: '/plugin/video',
          component: 'self',
          meta: {
            title: '视频',
            requiresAuth: true,
            icon: 'mdi:video'
          }
        },
        {
          name: 'plugin_editor',
          path: '/plugin/editor',
          component: 'multi',
          children: [
            {
              name: 'plugin_editor_quill',
              path: '/plugin/editor/quill',
              component: 'self',
              meta: {
                title: '富文本编辑器',
                requiresAuth: true,
                icon: 'mdi:file-document-edit-outline'
              }
            },
            {
              name: 'plugin_editor_markdown',
              path: '/plugin/editor/markdown',
              component: 'self',
              meta: {
                title: 'markdown编辑器',
                requiresAuth: true,
                icon: 'ri:markdown-line'
              }
            }
          ],
          meta: {
            title: '编辑器',
            icon: 'icon-park-outline:editor'
          }
        },
        {
          name: 'plugin_swiper',
          path: '/plugin/swiper',
          component: 'self',
          meta: {
            title: 'Swiper插件',
            requiresAuth: true,
            icon: 'simple-icons:swiper'
          }
        },
        {
          name: 'plugin_copy',
          path: '/plugin/copy',
          component: 'self',
          meta: {
            title: '剪贴板',
            requiresAuth: true,
            icon: 'mdi:clipboard-outline'
          }
        },
        {
          name: 'plugin_icon',
          path: '/plugin/icon',
          component: 'self',
          meta: {
            title: '图标',
            requiresAuth: true,
            localIcon: 'custom-icon'
          }
        },
        {
          name: 'plugin_print',
          path: '/plugin/print',
          component: 'self',
          meta: {
            title: '打印',
            requiresAuth: true,
            icon: 'mdi:printer'
          }
        }
      ],
      meta: {
        title: '插件示例',
        icon: 'clarity:plugin-line',
        order: 4
      }
    },
    {
      name: 'exception',
      path: '/exception',
      component: 'basic',
      children: [
        {
          name: 'exception_403',
          path: '/exception/403',
          component: 'self',
          meta: {
            title: '异常页403',
            requiresAuth: true,
            icon: 'ic:baseline-block'
          }
        },
        {
          name: 'exception_404',
          path: '/exception/404',
          component: 'self',
          meta: {
            title: '异常页404',
            requiresAuth: true,
            icon: 'ic:baseline-web-asset-off'
          }
        },
        {
          name: 'exception_500',
          path: '/exception/500',
          component: 'self',
          meta: {
            title: '异常页500',
            requiresAuth: true,
            icon: 'ic:baseline-wifi-off'
          }
        }
      ],
      meta: {
        title: '异常页',
        icon: 'ant-design:exception-outlined',
        order: 7
      }
    },
    {
      name: 'management',
      path: '/management',
      component: 'basic',
      children: [
        {
          name: 'management_auth',
          path: '/management/auth',
          component: 'self',
          meta: {
            title: '权限管理',
            requiresAuth: true,
            icon: 'ic:baseline-security'
          }
        },
        {
          name: 'management_role',
          path: '/management/role',
          component: 'self',
          meta: {
            title: '角色管理',
            requiresAuth: true,
            icon: 'carbon:user-role'
          }
        },
        {
          name: 'management_user',
          path: '/management/user',
          component: 'self',
          meta: {
            title: '用户管理',
            requiresAuth: true,
            icon: 'ic:round-manage-accounts'
          }
        },
        {
          name: 'management_route',
          path: '/management/route',
          component: 'self',
          meta: {
            title: '路由管理',
            requiresAuth: true,
            icon: 'material-symbols:route'
          }
        }
      ],
      meta: {
        title: '系统管理',
        icon: 'carbon:cloud-service-management',
        order: 9
      }
    }
  ],
  admin: [
    {
      name: 'dashboard',
      path: '/dashboard',
      component: 'basic',
      children: [
        {
          name: 'dashboard_analysis',
          path: '/dashboard/analysis',
          component: 'self',
          meta: {
            title: '分析页',
            requiresAuth: true,
            icon: 'icon-park-outline:analysis'
          }
        },
        {
          name: 'dashboard_workbench',
          path: '/dashboard/workbench',
          component: 'self',
          meta: {
            title: '工作台',
            requiresAuth: true,
            icon: 'icon-park-outline:workbench'
          }
        }
      ],
      meta: {
        title: '仪表盘',
        icon: 'mdi:monitor-dashboard',
        order: 1
      }
    },
    {
      name: 'component',
      path: '/component',
      component: 'basic',
      children: [
        {
          name: 'component_button',
          path: '/component/button',
          component: 'self',
          meta: {
            title: '按钮',
            requiresAuth: true,
            icon: 'mdi:button-cursor'
          }
        },
        {
          name: 'component_card',
          path: '/component/card',
          component: 'self',
          meta: {
            title: '卡片',
            requiresAuth: true,
            icon: 'mdi:card-outline'
          }
        },
        {
          name: 'component_table',
          path: '/component/table',
          component: 'self',
          meta: {
            title: '表格',
            requiresAuth: true,
            icon: 'mdi:table-large'
          }
        }
      ],
      meta: {
        title: '组件示例',
        icon: 'cib:app-store',
        order: 3
      }
    },
    {
      name: 'plugin',
      path: '/plugin',
      component: 'basic',
      children: [
        {
          name: 'plugin_charts',
          path: '/plugin/charts',
          component: 'multi',
          children: [
            {
              name: 'plugin_charts_echarts',
              path: '/plugin/charts/echarts',
              component: 'self',
              meta: {
                title: 'ECharts',
                requiresAuth: true,
                icon: 'simple-icons:apacheecharts'
              }
            },
            {
              name: 'plugin_charts_antv',
              path: '/plugin/charts/antv',
              component: 'self',
              meta: {
                title: 'AntV',
                requiresAuth: true,
                icon: 'simple-icons:antdesign'
              }
            }
          ],
          meta: {
            title: '图表',
            icon: 'mdi:chart-areaspline'
          }
        },
        {
          name: 'plugin_map',
          path: '/plugin/map',
          component: 'self',
          meta: {
            title: '地图',
            requiresAuth: true,
            icon: 'mdi:map'
          }
        },
        {
          name: 'plugin_video',
          path: '/plugin/video',
          component: 'self',
          meta: {
            title: '视频',
            requiresAuth: true,
            icon: 'mdi:video'
          }
        },
        {
          name: 'plugin_editor',
          path: '/plugin/editor',
          component: 'multi',
          children: [
            {
              name: 'plugin_editor_quill',
              path: '/plugin/editor/quill',
              component: 'self',
              meta: {
                title: '富文本编辑器',
                requiresAuth: true,
                icon: 'mdi:file-document-edit-outline'
              }
            },
            {
              name: 'plugin_editor_markdown',
              path: '/plugin/editor/markdown',
              component: 'self',
              meta: {
                title: 'markdown编辑器',
                requiresAuth: true,
                icon: 'ri:markdown-line'
              }
            }
          ],
          meta: {
            title: '编辑器',
            icon: 'icon-park-outline:editor'
          }
        },
        {
          name: 'plugin_swiper',
          path: '/plugin/swiper',
          component: 'self',
          meta: {
            title: 'Swiper插件',
            requiresAuth: true,
            icon: 'simple-icons:swiper'
          }
        },
        {
          name: 'plugin_copy',
          path: '/plugin/copy',
          component: 'self',
          meta: {
            title: '剪贴板',
            requiresAuth: true,
            icon: 'mdi:clipboard-outline'
          }
        },
        {
          name: 'plugin_icon',
          path: '/plugin/icon',
          component: 'self',
          meta: {
            title: '图标',
            requiresAuth: true,
            localIcon: 'custom-icon'
          }
        },
        {
          name: 'plugin_print',
          path: '/plugin/print',
          component: 'self',
          meta: {
            title: '打印',
            requiresAuth: true,
            icon: 'mdi:printer'
          }
        }
      ],
      meta: {
        title: '插件示例',
        icon: 'clarity:plugin-line',
        order: 4
      }
    },
    {
      name: 'exception',
      path: '/exception',
      component: 'basic',
      children: [
        {
          name: 'exception_403',
          path: '/exception/403',
          component: 'self',
          meta: {
            title: '异常页403',
            requiresAuth: true,
            icon: 'ic:baseline-block'
          }
        },
        {
          name: 'exception_404',
          path: '/exception/404',
          component: 'self',
          meta: {
            title: '异常页404',
            requiresAuth: true,
            icon: 'ic:baseline-web-asset-off'
          }
        },
        {
          name: 'exception_500',
          path: '/exception/500',
          component: 'self',
          meta: {
            title: '异常页500',
            requiresAuth: true,
            icon: 'ic:baseline-wifi-off'
          }
        }
      ],
      meta: {
        title: '异常页',
        icon: 'ant-design:exception-outlined',
        order: 7
      }
    },
    {
      name: 'management',
      path: '/management',
      component: 'basic',
      children: [
        {
          name: 'management_auth',
          path: '/management/auth',
          component: 'self',
          meta: {
            title: '权限管理',
            requiresAuth: true,
            icon: 'ic:baseline-security'
          }
        },
        {
          name: 'management_role',
          path: '/management/role',
          component: 'self',
          meta: {
            title: '角色管理',
            requiresAuth: true,
            icon: 'carbon:user-role'
          }
        },
        {
          name: 'management_user',
          path: '/management/user',
          component: 'self',
          meta: {
            title: '用户管理',
            requiresAuth: true,
            icon: 'ic:round-manage-accounts'
          }
        },
        {
          name: 'management_route',
          path: '/management/route',
          component: 'self',
          meta: {
            title: '路由管理',
            requiresAuth: true,
            icon: 'material-symbols:route'
          }
        }
      ],
      meta: {
        title: '系统管理',
        icon: 'carbon:cloud-service-management',
        order: 9
      }
    }
  ],
  user: [
    {
      name: 'dashboard',
      path: '/dashboard',
      component: 'basic',
      children: [
        {
          name: 'dashboard_analysis',
          path: '/dashboard/analysis',
          component: 'self',
          meta: {
            title: '分析页',
            requiresAuth: true,
            icon: 'icon-park-outline:analysis'
          }
        }
      ],
      meta: {
        title: '仪表盘',
        icon: 'mdi:monitor-dashboard',
        order: 1
      }
    }
  ]
};
