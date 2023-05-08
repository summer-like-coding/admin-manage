/**
 * 对获取的数据进行操作
 */
export function adapterOfFetchPictureList(data: ApiPictureManage.Pictures[] | null): PicManagement.Pic[] {
  if (!data) return [];

  return data.map(item => {
    const picture: PicManagement.Pic = {
      size: '200',
      ...item
    };

    return picture;
  });
}
