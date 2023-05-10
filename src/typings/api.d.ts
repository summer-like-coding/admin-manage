// 后端接口返回的数据类型

/** 后端返回的用户权益相关类型 */
declare namespace ApiAuth {
  /** 返回的token和刷新token */
  interface Token {
    token: string;
    refreshToken: string;
  }
  /** 返回的用户信息 */
  type UserInfo = Auth.UserInfo;
}

/** 后端返回的路由相关类型 */
declare namespace ApiRoute {
  /** 后端返回的路由数据类型 */
  interface Route {
    /** 动态路由 */
    routes: AuthRoute.Route[];
    /** 路由首页对应的key */
    home: AuthRoute.AllRouteKey;
  }
}
/**
 * 用户
 */
declare namespace ApiUserManagement {
  /**
   * 用户表
   */
  interface User {
    /** 用户id */
    id: string;
    /** 用户名 */
    userName: string | null;
    /** 用户年龄 */
    age: number | null;
    /**
     * 用户性别
     * - 0: 女
     * - 1: 男
     */
    gender: '0' | '1' | null;
    /** 用户手机号码 */
    phone: string;
    /** 用户邮箱 */
    email: string | null;
    /**
     * 用户状态
     * - 1: 启用
     * - 2: 禁用
     * - 3: 冻结
     * - 4: 软删除
     */
    userStatus: '1' | '2' | '3' | '4' | null;

    /**
     * 用户类型
     * - 1: 启用
     * - 2: 禁用
     * - 3: 冻结
     * - 4: 软删除
     */
    type: '1' | '2' | '3' | '4' | null;

    /**
     * 用户角色
     * - 0：超级管理员
     * - 1：管理员
     */
    role: '0' | '1' | null;
  }
  /**
   * 权限表
   */
  interface Permission {
    /** 权限id */
    id: number;
    /** 权限名 */
    name: string | null;
    /** 类型 */
    type: '0' | '1' | null;
  }
}

/**
 * 图片
 */
declare namespace ApiPictureManage {
  /**
   * 图片
   */
  interface Pictures {
    /** 图片ID */
    id: number;
    /** 目录ID */
    catalog_id: number | undefined;
    /** 动漫ID */
    anime_id: number;
    /** 创建者ID */
    user_id: number;
    /** 对应商品ID */
    sku_id: number;
    /** 图片名 */
    name: string;
    /** 描述 */
    description: string | undefined;
    /** 缩略图URL */
    url: string;
    /** 原图大小 */
    // size: string;
    /** 点赞 */
    like_count: number;
    /** 标签 */
    tags: string;
    /** 是否R18 */
    is_r18: number;
  }
  /**
   * 目录
   */
  interface Catalog {
    /** 目录ID */
    id: number;
    /** 目录名 */
    name: string;
    /** 目录描述 */
    description: string | undefined;
    /** 类型 */
    type: string;
    /** 成员个数 */
    member_count: number;
    /** 图标 */
    icon: string;
    /** 父目录ID */
    p_id: string | null;
    /** 星级 */
    stars: number;
    /** 创建时间 */
    created_at: string;
    /** 更新时间 */
    updated_at: string;
  }
  /**
   * 标签
   */
  interface Tag {
    /** 标签ID */
    id: number;
    /** 标签名 */
    name: string;
    /** 标签描述 */
    description: string | undefined;
    /** 类型 */
    type: string;
    /** 星级 */
    star: number;
    /** 颜色 */
    color: string;
    /** 图标 */
    icon: string;
    /** 状态 */
    status: number;
  }
}
