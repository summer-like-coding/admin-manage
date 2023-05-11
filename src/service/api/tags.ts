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
 * 删除无用标签
 */
export async function delete_unused_tags() {
  const data = await mockRequest.post<{ count: number }>(`/tags/delete/unused`);
  return data;
}
/**
 * 获取标签数量
 * @returns 标签数量
 */
export async function tags_count() {
  const data = await mockRequest.post<{ count: number }>('/tags/count');
  return data;
}

/**
 * 分页标签列表
 * @param page 页码
 * @param pagesize 页大小
 * @returns 标签
 */
export async function tags_page(page: number, size: number) {
  const data = await mockRequest.post<ApiPictureManage.Tag[]>('/tags/page', {
    page,
    size
  });
  return adapter(adapterOfFetchTagList, data);
}

/**
 * 修改标签内容
 * @param tag 标签
 * @returns 被修改的标签
 */
export async function tags_edit(tag: ApiPictureManage.Tag) {
  const data = await mockRequest.post<ApiPictureManage.Tag>(`/tags/${tag.id}/edit`, {
    name: tag.name,
    desc: tag.description,
    stars: tag.star,
    tag_type: tag.type ? tag.type : undefined
  });
  return adapter(adapterOfFetchTag, data);
}
/**
 * 查询标签
 * @param word 查询字符串
 * @returns 查询的标签
 */
export async function search_tags(word: string) {
  const data = await mockRequest.post<ApiPictureManage.Tag[]>(`/tags/search`, {
    word
  });
  return adapter(adapterOfFetchTagList, data);
}
