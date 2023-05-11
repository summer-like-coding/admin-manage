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
    id: number;
    description?: string | null; // 个性签名
    roleId?: number; // 角色 ID
    age: number | null;
    nickname?: string;
    username: string;
    realname?: string | null; // 真实姓名
    email?: string | null;
    phone?: string | null;
    avatar?: string | null;
    gender?: number;
    birthday?: string;
    company?: string;
    position?: string;
    website?: string;
    qq?: string;
    wechat?: string;
    facebook?: string;
    twitter?: string;
    youtube?: string;
    whatsapp?: string;
    tiktok?: string;
    instagram?: string;
    vipStatus?: number; // VIP 状态，枚举值
    vipLevel?: number; // VIP 等级，枚举值
    vipExpiredAt?: string; // VIP 过期时间，时间日期格式
    rewardsPoints?: number; // 奖励积分
    rewardsBalance?: string | null; // 余额，字符串格式，只有管理员查询时才返回
    rewardsExp?: number; // 奖励经验值
    tags?: string[]; // 用户标签列表
    language?: string;
    certificationStatus?: number;
    certificationType?: number;
    certificationInfo?: string;
    type?: number | null;
    star?: number;
    status?: number;
    createdAt?: string;
    updatedAt?: string;
  }
  /**
   * 权限表
   */
  interface Permission {
    id: number;
    name: string;
    description: string | null;
    star?: number;
    createdAt?: string;
    updatedAt?: string;
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
    id: number;
    userId: number | null;
    animeId: number | null;
    catalogId: number | null;
    skuId: number | null;
    name: string;
    description: string | null;
    url: string | null;
    size: string | null;
    likeCount: number;
    tags: string[] | null;
    isR18: boolean;
    copyright: string | null;
    type: number | null;
    star: number;
    status: number | null;
    pid: number | null;
    createdAt?: number;
    updatedAt?: number;
  }
  /**
   * 目录
   */
  interface Catalog {
    id: number;
    name: string;
    description: string | null;
    icon: string | null;
    color: string | null;
    memberCount: number;
    type: number | null;
    star: number;
    status: number | null;
    createdAt: string;
    updatedAt: string;
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
