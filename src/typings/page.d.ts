declare namespace paginationManagement {
  export interface PageQuery {
    page: number;
    size: number;
  }
  /**
   * @description: 分页查询参数，附加排序字段
   */
  export interface OrderedPageQuery extends PageQuery {
    orderby: string; // 排序字段
  }
}
