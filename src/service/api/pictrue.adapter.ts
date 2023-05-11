/**
 * 对获取的图片列表进行操作
 */
export function adapterOfFetchPictureList(data: ApiPictureManage.Pictures[] | null): PicManagement.Pic[] {
  if (!data) return [];

  return data.map(item => {
    const picture: PicManagement.Pic = {
      ...item
    };

    return picture;
  });
}
/**
 * 对获取的单个图片进行操作
 */

export function adapterOfFetchPicture(data: ApiPictureManage.Pictures | null): PicManagement.Pic | null {
  if (!data) return null;

  const picture: PicManagement.Pic = {
    ...data
  };

  return picture;
}

/**
 * 对获取的目录数据进行操作
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
 * 对获取的单个目录进行操作
 */
export function adapterOfFetchCatalog(data: ApiPictureManage.Catalog | null): PicManagement.Catalog | null {
  if (!data) return null;

  const catalog: PicManagement.Catalog = {
    ...data
  };

  return catalog;
}
