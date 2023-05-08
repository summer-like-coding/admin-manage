import { Random, mock } from 'mockjs';
import type { MockMethod } from 'vite-plugin-mock';

const apis: MockMethod[] = [
  // 获取所有图片
  {
    url: '/mock/pictures',
    method: 'post',
    response: (): Service.MockServiceResult<ApiPictureManage.Pictures[]> => {
      const data = mock({
        'list|10': [
          {
            id: '@id',
            user_id: '@id',
            name: '@cname',
            url: Random.image('200x100')
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
