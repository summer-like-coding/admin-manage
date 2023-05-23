// 设置目录的api
import { adapter } from '@/utils';
import { mockRequest } from '../request';
import { adapterOfFetchCatalog, adapterOfFetchCatalogList } from './catalog.adapter';

/** 获取子目录列表 */
export const fetchCatalogLeaves = async () => {
  const data = await mockRequest.post<ApiPictureManage.Catalog[]>('/catalogs/leaves');
  return adapter(adapterOfFetchCatalogList, data);
};

/**
 * 创建目录，需要权限
 * @returns 目录创建结果
 */
export const create_catalogue = async (catalogue: ApiPictureManage.Catalog) => {
  const data = await mockRequest.post<ApiPictureManage.Catalog>('/catalogues/create', catalogue);
  return adapter(adapterOfFetchCatalog, data);
};

/**
 * 获取所有目录，不需要权限
 * @returns 目录列表
 */
export async function all_catalogues() {
  const data = await mockRequest.post<ApiPictureManage.Catalog[]>('/catalogs/roots');
  return adapter(adapterOfFetchCatalogList, data);
}
