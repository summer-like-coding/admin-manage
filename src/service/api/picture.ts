// 设置picture的api
import { adapter } from '@/utils';
import { mockRequest } from '../request';
import { adapterOfFetchPictureList } from './pictrue.adapter';

/** 获取图片列表 */
export const fetchPictureList = async (page: number, size: number, orderby?: string) => {
  const data = await mockRequest.post<ApiPictureManage.Pictures[]>('/pictures', { page, size, orderby });

  return adapter(adapterOfFetchPictureList, data);
};

/** 获取图片详细信息 */

export const fetchPictureInfo = async (page: number, size: number, orderby?: string) => {
  const data = await mockRequest.post<ApiPictureManage.Pictures[]>('/pictures', { page, size, orderby });

  return adapter(adapterOfFetchPictureList, data);
};
