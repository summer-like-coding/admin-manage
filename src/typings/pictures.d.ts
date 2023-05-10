/** 图层模块 */
declare namespace PicManagement {
  interface Pic extends ApiPictureManage.Pictures {
    /** 图片大小 */
    size: string;
  }
  /**
   * 目录
   */
  interface Catalog extends ApiPictureManage.Catalog {}

  /**
   * 水印
   */
  interface Mark {
    x: number;
    y: number;
    width: number;
  }
}
