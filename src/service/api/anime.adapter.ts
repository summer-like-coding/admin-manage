/**
 * 对获取的anime数据进行适配
 */

export function adapterOfFetchAnimeList(data: ApiPictureManage.Anime[] | null): PicManagement.Anime[] {
  if (!data) return [];

  return data.map(item => {
    const catalog: PicManagement.Anime = {
      ...item
    };

    return catalog;
  });
}
