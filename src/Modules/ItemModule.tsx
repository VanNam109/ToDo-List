interface ItemState {
  id: number;
  name: string;
  level: number;
}

export interface ItemListState {
  itemsData: ItemState;
  showAlert: boolean;
  titleAlert: string;
}
