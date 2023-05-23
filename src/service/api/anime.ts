// 设置动漫api
import { adapter } from '@/utils';
import { mockRequest } from '../request';
import { adapterOfFetchAnimeList } from './anime.adapter';

/** 获取动漫列表 */
export const fetchAnimeList = async () => {
  const data = await mockRequest.post<ApiPictureManage.Anime[]>('/animes/leaves');
  return adapter(adapterOfFetchAnimeList, data);
};
