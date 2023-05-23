/** 图层模块 */
declare namespace PicManagement {
  interface Pic extends ApiPictureManage.Pictures {}
  /**
   * 目录
   */
  interface Catalog extends ApiPictureManage.Catalog {}
  /**
   * 标签
   */
  interface Tag extends ApiPictureManage.Tag {}
  /**
   * 动漫
   */
  interface Anime extends ApiPictureManage.Anime {}
  /**
   * 图片打码
   */
  interface Mark {
    x: number; // 归一化 x 坐标，float
    y: number; // 归一化 y 坐标，float
    width: number; // 归一化宽度，float
    height: number; // 归一化高度，float，一般等于宽度
    icon?: string; // 打码使用的图标，没有指定使用系统默认图标
    opacity?: number; // 不透明度，0 是完全透明，默认为 1 不透明，float
  }
  /** 图片标签类型 */
  enum PicTagType {
    /**
     * 无
     */
    NONE,
    /**
     * 通用
     */
    GENERAL,
    /**
     * 角色
     */
    CHARACTER,
    /**
     * 画师
     */
    PAINTER,
    /**
     * 游戏
     * /
    GAME, 
    /** 漫画 */
    PARODY,
    /** 动漫 */
    ANIME,
    /**
     * 产品类型
     */
    PROD,
    /**
     * 应用场景
     */
    SCENE,
    /**
     * 风格
     */
    STYLE,
    /**
     * 颜色
     */
    COLOR,
    /**
     * 材质
     */
    MATERIAL,
    /**
     * 标语
     */
    SLOGAN,
    /**
     * 圈子
     * /
    CIRCLE,
    /**
     * 活动
     */
    ACT,
    /**
     * 隐藏
     */
    HIDE,
    /**
     * 元数据
     */
    META
  }
}
