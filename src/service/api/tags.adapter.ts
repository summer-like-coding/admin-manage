/**
 * 获取标签列表
 */
export function adapterOfFetchTagList(data: ApiPictureManage.Tag[] | null): PicManagement.Tag[] {
  if (!data) return [];

  return data.map(item => {
    const tag: PicManagement.Tag = {
      ...item
    };

    return tag;
  });
}

/**
 * 对获取的单个标签进行处理
 * @param data
 * @returns
 * @description
 */
export function adapterOfFetchTag(data: ApiPictureManage.Tag | null): PicManagement.Tag | null {
  if (!data) return null;
  const tag: PicManagement.Tag = {
    ...data
  };
  return tag;
}
