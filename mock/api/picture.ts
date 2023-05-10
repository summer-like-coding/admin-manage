import { Random, mock } from 'mockjs';
import type { MockMethod } from 'vite-plugin-mock';

const apis: MockMethod[] = [
  // 获取所有图片
  {
    url: '/mock/pictures',
    method: 'post',
    response: (options): Service.MockServiceResult<ApiPictureManage.Pictures[]> => {
      // options.body;
      console.log(options.body);
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
  },
  // 获取详细信息
  {
    url: '/mock/pictures',
    method: 'post',
    response: (): Service.MockServiceResult<ApiPictureManage.Pictures[]> => {
      const data = mock({
        'list|1': [
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
  },
  // 获取分组图片信息
  {
    url: '/mock/pictures/group',
    method: 'post',
    response: (): Service.MockServiceResult<ApiPictureManage.Pictures[]> => {
      // const { page, size, orderby = 'desc' } = options.body;
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
