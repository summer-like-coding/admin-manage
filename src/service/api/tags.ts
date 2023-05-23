import { adapter } from '@/utils';
import { mockRequest } from '../request';
import { adapterOfFetchTag, adapterOfFetchTagList } from './tags.adapter';

/**
 * 修改图片标签
 * @param id 图片 ID
 * @param tags 标签列表
 * @returns 被修改后的标签列表
 */
export async function change_tags(id: string, tags: string[]) {
  const data = await mockRequest.post<ApiPictureManage.Tag>(`/imgs/${id}/change_tags`, {
    tags
  });
  return adapter(adapterOfFetchTag, data);
}
/**
 * 查询标签列表
 */
export async function search_tags(word: string) {
  const data = await mockRequest.post<ApiPictureManage.Tag[]>(`/tags/search`, {
    word
  });
  return adapter(adapterOfFetchTagList, data);
}
