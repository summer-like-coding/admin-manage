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
