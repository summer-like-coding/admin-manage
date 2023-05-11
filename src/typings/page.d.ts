declare namespace paginationManagement {
  export interface OrderedPageQuery {
    page: number;
    size: number;
    orderby?: string;
  }
}
