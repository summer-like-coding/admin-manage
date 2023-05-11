/**
 * 对获取的目录数据进行处理
 */
export function adapterOfFetchCatalogList(data: ApiPictureManage.Catalog[] | null): PicManagement.Catalog[] {
  if (!data) return [];

  return data.map(item => {
    const catalog: PicManagement.Catalog = {
      ...item
    };

    return catalog;
  });
}

/**
 * 对获取的某个目录进行处理
 * @param data
 * @returns
 * @description
 *
 */
export function adapterOfFetchCatalog(data: ApiPictureManage.Catalog | null): PicManagement.Catalog | null {
  if (!data) return null;

  const catalog: PicManagement.Catalog = {
    ...data
  };

  return catalog;
}
