import { mock } from 'mockjs';
import type { MockMethod } from 'vite-plugin-mock';

const apis: MockMethod[] = [
  // 获取所有用户user
  {
    url: '/mock/getAllUserList',
    method: 'post',
    response: (): Service.MockServiceResult<ApiUserManagement.User[]> => {
      const data = mock({
        'list|1000': [
          {
            id: '@id',
            username: '@cname',
            'age|18-56': 56,
            'roleId|1': [0, 1],
            'gender|1': [0, 1, null],
            phone:
              /^[1](([3][0-9])|([4][01456789])|([5][012356789])|([6][2567])|([7][0-8])|([8][0-9])|([9][012356789]))[0-9]{8}$/,
            'email|1': ['@email("qq.com")', null],
            'status|1': [1, 2, 3, 4, null],
            'type|1': [1, 2, 3, 4, null]
          }
        ]
      });

      return {
        code: 200,
        message: 'ok',
        data: data.list
      };
    }
  },
  // 获取所有角色role
  {
    url: '/mock/getAllRoleList',
    method: 'post',
    response: (): Service.MockServiceResult<ApiUserManagement.User[]> => {
      const data = mock({
        'list|100': [
          {
            id: '@id',
            name: '@cname',
            'type|1': ['1', '2', '3', '4', null],
            description: '@csentence',
            'updated_at|+1': 1,
            'is_deleted|0-1': 1,
            version: 0,
            created_at: '@date()',
            updated_at: '@date()'
          }
        ]
      });

      return {
        code: 200,
        message: 'ok',
        data: data.list
      };
    }
  },
  // 获取所有权限
  {
    url: '/mock/permissions',
    method: 'post',
    response: (): Service.MockServiceResult<ApiUserManagement.Permission[]> => {
      const data = mock({
        'list|10': [
          {
            id: '@id',
            'name|1': ['上传图片', '图片打码', '内容审核', '下载图片'],
            description: '@csentence'
          }
        ]
      });

      return {
        code: 200,
        message: 'ok',
        data: data.list
      };
    }
  }
];

export default apis;
