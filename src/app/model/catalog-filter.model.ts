export class CatalogFilter {
  type: CatalogFilterType;
  value: any;
  display: string;
  constructor(filter?: any) {
    if (filter) {
      this.type = filter.type;
      this.value = filter.value;
      this.display = filter.display
    }
  }
}
export enum CatalogFilterType {
  catagory = 'Catagory',
  filter = 'Filter',
  sort = 'Sort',
  search = 'Search'
}