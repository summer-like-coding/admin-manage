import { mock } from 'mockjs';
import type { MockMethod } from 'vite-plugin-mock';

const apis: MockMethod[] = [
  // 获取所有根目录
  {
    url: '/mock/catalogs/roots',
    method: 'post',
    response: (): Service.MockServiceResult<ApiPictureManage.Catalog[]> => {
      const data = mock({
        'list|10': [
          {
            id: '@id',
            name: '@tld'
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
  // 获取所有子目录
  {
    url: '/mock/catalogs/leaves',
    method: 'post',
    response: (): Service.MockServiceResult<ApiPictureManage.Catalog[]> => {
      const data = mock({
        'list|10': [
          {
            id: '@id',
            name: '@tld'
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
