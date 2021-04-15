import React, { Component } from "react";
import dataItems from "../../../data/DataItems";
import { ItemListState } from "../../../Modules/ItemModule";
import Item from "./Item";

class ItemList extends Component<any> {
  constructor(props: ItemListState) {
    super(props);
    this.state = {
      dataItems: dataItems,
      showAlert: true,
      titleAlert: "",
    };
  }
  renderItem = () => {
    return dataItems.map((item, key) => {
      return (
        <Item {...item} key={key} handleShowAlert={this.handleShowAlert} />
      );
    });
  };
  handleShowAlert = (item: any) => {
    console.log(item);
  };
  render() {
    return (
      <div className="panel panel-success">
        <div className="panel-heading">List Item</div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th style={{ width: "10%" }} className="text-center">
                #
              </th>
              <th>Name</th>
              <th style={{ width: "15%" }} className="text-center">
                Level
              </th>
              <th style={{ width: "15%" }}>Action</th>
            </tr>
          </thead>
          <tbody>{this.renderItem()}</tbody>
        </table>
      </div>
    );
  }
}
export default ItemList;
