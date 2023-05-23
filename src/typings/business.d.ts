/** 用户相关模块 */
declare namespace Auth {
  /**
   * 用户角色类型(前端静态路由用角色类型进行路由权限的控制)
   * - super: 超级管理员(该权限具有所有路由数据)
   * - admin: 管理员
   * - user: 用户
   */
  type RoleType = 'super' | 'admin' | 'user';

  /** 用户信息 */
  interface UserInfo {
    /** 用户id */
    userId: string;
    /** 用户名 */
    userName: string;
    /** 用户角色类型 */
    userRole: RoleType;
  }
}

declare namespace UserManagement {
  interface User extends ApiUserManagement.User {
    /** 序号 */
    index: number;
    /** 表格的key（id） */
    key: number;
  }
  interface Permission extends ApiUserManagement.Permission {
    /** 类型 */
    type: number;
  }
  interface RolePermission extends ApiUserManagement.RolePermission {}
  /**
   * 用户性别
   * - 0: 女
   * - 1: 男
   */
  type GenderKey = NonNullable<User['gender']>;

  /**
   * 用户状态
   * - 1: 启用
   * - 2: 禁用
   * - 3: 冻结
   * - 4: 软删除
   */
  type UserStatusKey = NonNullable<User['status']>;

  /**
   * 用户类型
   * - 1: 启用
   * - 2: 禁用
   * - 3: 冻结
   * - 4: 软删除
   */
  type type = NonNullable<User['type']>;
  /**
   * 用户角色
   */
  type RoleKey = NonNullable<User['roleId']>;
  /**
   * 用户权限类型
   */
  enum PermissionType {
    DEFAULT, // 默认，无内容
    LOGIN_DEFAULT, // 默认登录用户所拥有的基本权限
    LOGIN_ADMIN, // 管理员登录所拥有的基本权限
    CURRENT_USER, // 当前登录用户所拥有的权限，逻辑校验
    CREATE_ROLE, // 创建角色
    DELETE_ROLE, // 删除角色
    MODIFY_ROLE, // 修改角色信息
    UPLOAD_PICTURE, // 上传图片
    DOWNLOAD_PICTURE, // 下载图片
    DELETE_PICTURE, // 删除图片
    MODFIY_PICTURE, // 修改图片信息
    REUPLOAD_PICTURE, // 重新上传图片
    CREATE_PICTURE_TAG, // 创建图片标签
    BACKUPS_PICTURE, // 备份图片
    CREATE_USER, // 创建用户
    DELETE_USER, // 删除用户
    MODIFY_USER, // 修改用户信息
    QUERY_ORDERS, // 查询订单
    MODIFY_ORDER // 修改订单信息
  }
}
