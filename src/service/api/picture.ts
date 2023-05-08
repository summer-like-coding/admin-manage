// 设置picture的api
import { adapter } from '@/utils';
import { mockRequest } from '../request';
import { adapterOfFetchPictureList } from './pictrue.adapter';

/** 获取图片列表 */
export const fetchPictureList = async () => {
  const data = await mockRequest.post<ApiPictureManage.Pictures[]>('/pictures');

  return adapter(adapterOfFetchPictureList, data);
};
