import { mock } from 'mockjs';
import type { MockMethod } from 'vite-plugin-mock';

const apis: MockMethod[] = [
  /**
   * @description 获取所有子目录，用于和图片匹配
   *
   */
  {
    url: '/mock/catalogs/leaves',
    method: 'post',
    response: (): Service.MockServiceResult<ApiPictureManage.Catalog[]> => {
      const data = mock({
        'list|10': [
          {
            id: '@id',
            name: '@word',
            type: 'image',
            'pid|1-200': 0,
            created_at: '@date("yyyy-MM-dd") @time("HH:mm:ss")',
            updated_at: '@date("yyyy-MM-dd") @time("HH:mm:ss")'
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
