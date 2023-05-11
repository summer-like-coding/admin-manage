// 设置目录的api
import { adapter } from '@/utils';
import { mockRequest } from '../request';
import { adapterOfFetchCatalogList } from './catalog.adapter';

/** 获取根目录列表 */
export const fetchCatalogRoots = async () => {
  const data = await mockRequest.post<ApiPictureManage.Catalog[]>('/catalogs/roots');
  return adapter(adapterOfFetchCatalogList, data);
};

/** 获取子目录列表 */
export const fetchCatalogLeaves = async () => {
  const data = await mockRequest.post<ApiPictureManage.Catalog[]>('/catalogs/leaves');
  return adapter(adapterOfFetchCatalogList, data);
};
