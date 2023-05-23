import { adapter } from '@/utils';
import { mockRequest } from '../request';
import {
  adapterOfFetchPermissionList,
  adapterOfFetchRolePermissionList,
  adapterOfFetchUserList
} from './management.adapter';

/** 获取用户列表 */
export const fetchUserList = async () => {
  const data = await mockRequest.post<ApiUserManagement.User[] | null>('/getAllUserList');
  return adapter(adapterOfFetchUserList, data);
};
/* 获取角色列表 */
export const fetchRoleList = async () => {
  const data = await mockRequest.post<ApiUserManagement.User[] | null>('/roles');
  return adapter(adapterOfFetchUserList, data);
};
/**
 * 获取权限列表
 */
export const getchPermissionList = async () => {
  const data = await mockRequest.post<ApiUserManagement.Permission[] | null>('/permissions');
  return adapter(adapterOfFetchPermissionList, data);
};

/**
 * 获取角色详情
 */
export const fetchRoleDetail = async (id: number) => {
  const data = await mockRequest.post<ApiUserManagement.RolePermission | null>(`/roles/${id}`, { id });
  return adapter(adapterOfFetchRolePermissionList, data);
};
