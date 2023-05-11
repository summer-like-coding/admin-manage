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
   * 水印
   */
  interface Mark {
    x: number;
    y: number;
    width: number;
  }
}
