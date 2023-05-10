/**
 * 返回结果格式
 */
export interface ResponseData<T = any> {
  code: number;
  data: T | null;
  msg: string;
}

/**
 * 用户信息格式
 */
export interface User {
  id: string;
  realname: string;
  role?: number;
  user_type?: number;
  desc?: string;
  username: string;
  password?: string;
  birthday?: string;
  avatar?: string;
  sex: string;
  email: string;
  phone: string;
  stars?: number;
  remarks?: string;
  last_download?: string;
  remain_times?: number;
  created_at?: string;
  updated_at?: string;
}

/**
 * 类别对象格式
 */
export interface Catalogue {
  id: string;
  name: string;
  desc?: string;
  catalogue_type?: string;
  father_id: string | null;
  user_id?: string;
  stars?: number;
}

/**
 * 标签格式
 */
export interface Tag {
  id: string;
  name: string;
  desc?: string;
  tag_type?: string;
  stars?: number;
}

/**
 * 图像对象格式
 */
export interface Image {
  id: string;
  name: string;
  number?: number;
  desc?: string;
  url: string;
  img_type?: string;
  stars?: number;
  remarks?: string;
  tags: string[] | string;
  r18: number;
  copyright?: string;
  catalogue_id?: string;
  user_id?: string;
}

/**
 * 打码格式
 */
export interface Mark {
  x: number;
  y: number;
  width: number;
}
