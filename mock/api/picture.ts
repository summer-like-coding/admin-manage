import { Random, mock } from 'mockjs';
import type { MockMethod } from 'vite-plugin-mock';

const apis: MockMethod[] = [
  // 获取所有图片
  {
    url: '/mock/pictures',
    method: 'post',
    response: (options): Service.MockServiceResult<ApiPictureManage.Pictures[]> => {
      console.log('数据', options.body);
      const data = mock({
        'list|10': [
          {
            id: '@id',
            user_id: '@id',
            size: '1024',
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
    url: '/mock/pictures/:id',
    method: 'post',
    response: (options): Service.MockServiceResult<ApiPictureManage.Pictures[]> => {
      const data = mock({
        'list|1': [
          {
            id: () => options.body.id,
            user_id: '@id',
            name: '@cname',
            description: '@cparagraph',
            copyright: '开源',
            'likeCount|1-200': 100
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
  },
  // 发送临时图片
  {
    url: '/mock/imgs/temp/upload',
    method: 'post',
    response: options => {
      console.log('数据', options.body);
      const data = mock({
        list: {
          uuid: '@id'
        }
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
