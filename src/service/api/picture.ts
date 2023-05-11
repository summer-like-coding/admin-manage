// 设置picture的api
import { adapter } from '@/utils';
import { mockRequest } from '../request';
import {
  adapterOfFetchCatalog,
  adapterOfFetchCatalogList,
  adapterOfFetchPicture,
  adapterOfFetchPictureList
} from './pictrue.adapter';

/** 获取图片列表 */
export const fetchPictureList = async (page: number, size: number, orderby?: string) => {
  const data = await mockRequest.post<ApiPictureManage.Pictures[]>('/pictures', { page, size, orderby });

  return adapter(adapterOfFetchPictureList, data);
};

/** 获取图片详细信息 */

export const fetchPictureInfo = async (id: number) => {
  const data = await mockRequest.post<ApiPictureManage.Pictures>(`/pictures/${id}`, { id });

  return adapter(adapterOfFetchPicture, data);
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

/**
 * 获取叶节点目录
 * @returns 叶节点目录列表
 */
export async function leaf_catalogues() {
  const data = await mockRequest.post<ApiPictureManage.Catalog[]>('/catalogs/leaves');
  return adapter(adapterOfFetchCatalogList, data);
}

/**
 * @returns 全部图片信息
 */
export async function imgs_count() {
  const data = await mockRequest.post<{ count: number; max: number }>('/imgs/count');
  return data;
}

/**
 * 图片查询，每次查不超过 100 张
 * @returns 图片列表
 */
export async function page_image(page: number) {
  const data = await mockRequest.post<ApiPictureManage.Pictures[]>(`/imgs/pages/${page}`);
  return adapter(adapterOfFetchPictureList, data);
}

/**
 * 根据目录查找图片
 * @param catalogue_id 目录 ID
 * @returns 目录下面的全部图片
 */
export async function imgs_by_catalogue(catalogue_id: number) {
  const data = await mockRequest.post<ApiPictureManage.Pictures[]>(`/imgs/catalogue/${catalogue_id}`);
  return adapter(adapterOfFetchPictureList, data);
}

/**
 * 修改图片属性
 * @param id 图片 ID
 * @param prop 属性名
 * @param value 属性值
 * @returns 修改后的名称
 */
export async function change_image_data(id: string, prop: string, value: string) {
  const data = await mockRequest.post<string>(`/imgs/${id}/update`, {
    prop,
    value
  });
  return data;
}

/**
 * 删除图片
 * @param id 图片 ID
 * @param delete_type 删除类型，可选值：'delete'、'move'
 * @returns 删除成功信息
 */
export async function delete_image(id: string, delete_type: 'fake' | 'forever') {
  const data = await mockRequest.post(`/imgs/${id}/delete`, {
    delete_type
  });
  return data;
}

/**
 * 替换图片信息
 * @param id 图片 ID
 * @param file 新文件
 * @returns 成功信息
 */
export async function replace_image(id: string, file: File) {
  const form = new FormData();
  form.append('file', file);
  const data = await mockRequest.post<string>(`/imgs/${id}/replace`, form);
  return data;
}

/**
 * 给图片打码
 * @param id 图片 ID
 * @param marks 打码信息
 * @returns 打码结果
 */
export async function remark_image(id: string, marks: PicManagement.Mark[]) {
  const data = await mockRequest.post<string>(`/imgs/${id}/remark`, {
    marks
  });
  return data;
}

/**
 * 上传微信客服图片
 * @param file 图片文件
 * @returns 文件名
 */
export async function upload_wechat_image(file: File) {
  const form = new FormData();
  form.append('file', file);
  const data = await mockRequest.post<{ name: string }>('/imgs/wechat/upload', form);
  return data;
}

/**
 * 修改用户身份
 * @param id 用户 ID
 * @param role 用户身份
 * @returns 修改状态
 */
export async function change_role(id: string, role: number) {
  const data = await mockRequest.post<null>(`/users/${id}/set_role`, {
    role
  });
  return data;
}

/**
 * 设置厂家下载次数
 * @param id 厂家用户 ID
 * @param count 下载次数
 */
export async function set_factory_count(id: string, count: number) {
  const data = await mockRequest.post(`/users/${id}/set_download_count`, {
    count
  });
  return data;
}

/**
 * 上传临时图片
 * @param file 待上传的文件图片
 * @returns 上传后的文件名
 */
export async function upload_temp(file: File) {
  const form = new FormData();
  form.append('file', file);
  const data = await mockRequest.post<{ name: string }>('/imgs/temp/upload', form);
  return data;
}

/**
 * 上传图片到图库系统
 * @param img 待上传的图片
 * @param tags 标签信息
 * @param marks 打码信息
 */
export async function upload_img(img: ApiPictureManage.Pictures, tags: string[], marks: PicManagement.Mark[]) {
  const data = await mockRequest.post<ApiPictureManage.Pictures>('/imgs/upload', {
    img,
    tags,
    marks
  });
  return adapter(adapterOfFetchPicture, data);
}

/**
 * 搜索图片信息
 * @param query_text 查询文本
 * @returns 查询图片结果
 */
export async function search_basic(query_text: string, catalogue_id: string) {
  const data = await mockRequest.post<ApiPictureManage.Pictures[]>(`/imgs/search/${catalogue_id}`, {
    query_text
  });
  return adapter(adapterOfFetchPictureList, data);
}

/**
 * 获取图片详细信息
 * @param id 图片 id
 * @returns 图片详情
 */
export async function image_by_id(id: string) {
  const data = await mockRequest.post<ApiPictureManage.Pictures>(`/imgs/${id}`);
  return adapter(adapterOfFetchPicture, data);
}

/**
 * 查询推荐搜索词
 * @returns 搜索
 */
export async function search_tip_labels() {
  const data = await mockRequest.post<ApiPictureManage.Tag[]>('/imgs/tip_labels');
  return data;
}

/**
 * 查询联想词
 * @param search_text 搜索文本
 * @returns 联想词
 */
export async function association(search_text: string) {
  const data = await mockRequest.post<ApiPictureManage.Tag[]>('/imgs/association', {
    search_text
  });
  return data;
}

/**
 * 点赞图片
 * @param id 图片 ID
 * @returns 图片点赞数
 */
export async function star_img(id: string) {
  const data = await mockRequest.post<number>(`/imgs/${id}/star`);
  return data;
}

/**
 * 获取所有动漫列表
 * @returns 标签列表
 */
export async function all_anim_list() {
  const data = await mockRequest.post<ApiPictureManage.Tag[]>('/anim/all');
  return data;
}

/**
 * 获取指定动漫图片数量
 * @param id 动漫 Tag ID
 * @returns 数值
 */
export async function anim_item_count(id: string) {
  const data = await mockRequest.post<{ count: number }>(`/anim/${id}/count`);
  return data;
}

/**
 * 获取指定动漫的图片列表
 * @param id 动漫 Tag ID
 * @returns 图片列表
 */
export async function anim_item_detail(id: string, page: number, size: number) {
  const data = await mockRequest.post<ApiPictureManage.Pictures[]>(`/anim/${id}/page`, {
    page,
    size
  });
  return data;
}

/**
 * 返回根目录
 * @returns 返回根目录内容
 */
export async function root_catalogue() {
  const data = await mockRequest.post<ApiPictureManage.Catalog[]>('/catalogues/root');
  return data;
}

/**
 * 获取目录内容
 * @param id 目录 ID
 * @returns 目录详细信息
 */
export async function catalogue_detail(id: string) {
  const data = await mockRequest.post<{
    details: ApiPictureManage.Catalog;
    sub: ApiPictureManage.Catalog[];
    count: number;
  }>(`/catalogues/${id}`);
  return data;
}

/**
 * 分页获取目录下的图片
 * @param id 目录 ID
 * @param page 页数
 * @param size 页大小
 * @returns 该页的图像
 */
export async function catalogue_page(id: string, page: number, size: number) {
  const data = await mockRequest.post<ApiPictureManage.Pictures[]>(`/catalogues/${id}/page`, {
    page,
    size
  });
  return data;
}

/**
 * 反馈
 * @param text 反馈文本
 * @returns 空
 */
export async function feedback(text: string) {
  const data = await mockRequest.post(`/feedback/info`, {
    text
  });
  return data;
}
