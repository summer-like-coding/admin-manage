export function adapterOfFetchUserList(data: ApiUserManagement.User[] | null): UserManagement.User[] {
  if (!data) return [];

  return data.map((item, index) => {
    const user: UserManagement.User = {
      index: index + 1,
      key: item.id,
      ...item
    };

    return user;
  });
}

export function adapterOfFetchPermissionList(data: ApiUserManagement.Permission[] | null): UserManagement.Permission[] {
  if (!data) return [];

  return data.map(item => {
    const permissions: UserManagement.Permission = {
      type: 1,
      ...item
    };

    return permissions;
  });
}
// 用户权限表数据操作
export function adapterOfFetchRolePermissionList(
  data: ApiUserManagement.RolePermission | null
): UserManagement.RolePermission {
  if (!data) return {} as UserManagement.RolePermission;

  const rolePermission: UserManagement.RolePermission = {
    role: data.role,
    permissions: data.permissions
  };

  return rolePermission;
}
