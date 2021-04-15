interface ItemObject {
  id: any;
  name: string;
  level: number;
}

export interface ListItemState {
  items: Array<ItemObject>;
  idAlert: any;
  indexEdit: any;
  idEdit: any;
  nameEdit: string;
  levelEdit: number;
  arrayLevel: Array<number>;
  showForm: boolean;
  valueItem: string;
  levelItem: number;
  sortType: any;
  sortOrder: any;
  valueSearch: string;
  isSearch: boolean;
  itemsSearch: Array<any>;
}
