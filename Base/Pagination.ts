import BaseEntity from "../Base/BaseEntity"

export default class Pagination extends BaseEntity<Pagination> {
  pageNumber: number;
  pageSize: number;
}