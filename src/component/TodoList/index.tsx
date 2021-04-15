import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import dataItems from "../../data/DataItems";
import { ListItemState } from "../../interfaces/ItemModule";
import Form from "./Form";
import Item from "./ItemList/Item";
import ItemEdit from "./ItemList/ItemEdit";
import Search from "./Search";
import Sort from "./Sort";
import Title from "./Title";
class ToDoList extends Component<any, ListItemState> {
  constructor(props: ListItemState) {
    super(props);
    let arrayLevel = [];
    for (let i = 0; i < dataItems.length; i++) {
      if (arrayLevel.indexOf(dataItems[i].level) === -1) {
        arrayLevel.push(dataItems[i].level);
      }
    }
    arrayLevel.sort(function (a, b) {
      return a - b;
    });
    this.state = {
      items: dataItems,
      idAlert: " ",
      indexEdit: " ",
      idEdit: 0,
      nameEdit: "",
      levelEdit: 0,
      arrayLevel: arrayLevel,
      showForm: false,
      valueItem: " ",
      levelItem: 0,
      sortType: "",
      sortOrder: "",
      valueSearch: "",
    };
  }
  //Render Item in ListData
  renderItem = () => {
    let {
      items,
      idEdit,
      indexEdit,
      nameEdit,
      levelEdit,
      arrayLevel,
    } = this.state;
    if (items.length === 0) {
      return <Item item={0} />;
    }
    return items.map((item, index) => {
      if (item.id === idEdit) {
        return (
          <ItemEdit
            key={index}
            indexEdit={indexEdit}
            nameEdit={nameEdit}
            levelEdit={levelEdit}
            arrayLevel={arrayLevel}
            handleEditClickCancel={this.handleEditClickCancel}
            handleEditChangeSelect={this.handleEditChangeSelect}
            handleEditInputChange={this.handleEditInputChange}
            handleEditClickSubmit={this.handleEditClickSubmit}
          />
        );
      }
      return (
        <Item
          item={item}
          index={index}
          handleShowAlert={this.handleShowAlert}
          handleEditItem={this.handleEditItem}
        />
      );
    });
  };
  //ShowAlert delete
  handleShowAlert = (item: any): void => {
    this.setState({
      idAlert: item.id,
    });
    this.handleDeleteItem();
  };
  //Event Delete Item
  handleDeleteItem = (): void => {
    let { idAlert, items } = this.state;
    if (items.length >= 0) {
      for (let i = 0; i < items.length; i++) {
        if (items[i].id === idAlert) {
          items.splice(i, 1);
          break;
        }
      }
    }
  };
  // //Even Edit Item
  handleEditItem = (item: any, index: any): void => {
    this.setState({
      indexEdit: index,
      idEdit: item.id,
      nameEdit: item.name,
      levelEdit: item.level,
    });
  };
  // //Even Change Edit Input
  handleEditInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    this.setState({
      nameEdit: e.target.value,
    });
  };
  //Even Change Select
  handleEditChangeSelect = (e: any) => {
    this.setState({
      levelEdit: e.target.value,
    });
  };
  // //Even Submit Edit
  handleEditClickSubmit = () => {
    let { items, idEdit, nameEdit, levelEdit } = this.state;
    if (items.length > 0) {
      for (let i = 0; i < items.length; i++) {
        if (items[i].id === idEdit) {
          items[i].name = nameEdit;
          items[i].level = +levelEdit;
          break;
        }
      }
    }
    this.setState({
      idEdit: "",
    });
  };
  //Event Cancel Edit
  handleEditClickCancel = () => {
    this.setState({
      idEdit: "",
    });
  };
  //Even Show Form
  handleShowForm = () => {
    this.setState({
      showForm: !this.state.showForm,
    });
  };
  //Even  Change Input Form
  handleChangeInputForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      valueItem: e.target.value,
    });
  };
  //Even change Form Select
  handleFormSelectChange = (e: any) => {
    this.setState({
      levelItem: e.target.value,
    });
  };
  //Even click cancel select
  handleFormClickCancel = () => {
    this.setState({
      valueItem: "",
      levelItem: 0,
    });
  };
  //Even button submit form
  handleFormClickSubmit = () => {
    let { valueItem, levelItem } = this.state;
    if (valueItem.trim() === "") return false;
    let newItem = {
      id: uuidv4(),
      name: valueItem,
      level: +levelItem,
    };
    dataItems.push(newItem);
    this.setState({
      items: dataItems,
      valueItem: "",
      levelItem: 0,
      showForm: false,
    });
  };
  // handle sort
  handleSort = (sortType: any, sortOrder: any) => {
    let { items } = this.state;
    if (sortOrder !== "" && sortType !== "") {
      let value = `${sortType}-${sortOrder}`;
      switch (value) {
        default:
          break;
        case "name-asc":
          items.sort(this.compareValues("name", "asc"));
          break;
        case "name-desc":
          items.sort(this.compareValues("name", "desc"));
          break;
        case "level-desc":
          items.sort(this.compareValues("level", "asc"));
          break;
        case "level-asc":
          items.sort(this.compareValues("level", "desc"));
          break;
      }
      this.setState({
        items: items,
        sortType: sortType,
        sortOrder: sortOrder,
      });
    }
  };
  // function for sortation
  compareValues = (key: any, order = "asc") => {
    return function (a: any, b: any) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        return 0;
      }
      const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
      const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];
      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return order === "desc" ? comparison * -1 : comparison;
    };
  };
  //handle Search Input
  handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  render() {
    return (
      <div className="container">
        <Title />
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <Search
              valueSearch={this.state.valueSearch}
              handleSearch={this.handleSearch}
            />
          </div>
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <Sort
              sortType={this.state.sortType}
              sortOrder={this.state.sortOrder}
              handleSort={this.handleSort}
            />
          </div>
          <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
            <button
              type="button"
              className="btn btn-info btn-block marginB10"
              onClick={this.handleShowForm}
            >
              {this.state.showForm ? "Close Item" : "Add Item"}
            </button>
          </div>
        </div>
        <div className="row marginB10">
          <div className="col-md-offset-7 col-md-5">
            <Form
              showForm={this.state.showForm}
              arrayLevel={this.state.arrayLevel}
              valueItem={this.state.valueItem}
              handleChangeInputForm={this.handleChangeInputForm}
              levelItem={this.state.levelItem}
              handleFormSelectChange={this.handleFormSelectChange}
              handleFormClickCancel={this.handleFormClickCancel}
              handleFormClickSubmit={this.handleFormClickSubmit}
            />
          </div>
        </div>
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
      </div>
    );
  }
}
export default ToDoList;
