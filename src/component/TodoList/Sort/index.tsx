import React, { Component } from "react";
/* eslint-disable jsx-a11y/anchor-is-valid */
class Sort extends Component<any> {
  //render Sort
  renderSort = () => {
    let { sortType, sortOrder } = this.props;
    if (sortType !== "" && sortOrder !== "") {
      return (
        <span className="label label-success label-medium text-uppercase">
          {sortType} - {sortOrder}
        </span>
      );
    }
  };
  // Handle Click sort
  handleClick = (sortType: any, sortOrder: any) => {
    this.props.handleSort(sortType, sortOrder);
  };
  render() {
    return (
      <div className="dropdown">
        <button
          className="btn btn-default dropdown-toggle"
          type="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="true"
        >
          Sort by <span className="caret" />
        </button>
        <ul className="dropdown-menu" id="dropdownMenu1">
          <li onClick={() => this.handleClick("name", "asc")}>
            <span role="button" className="text-uppercase">
              Name ASC
            </span>
          </li>
          <li onClick={() => this.handleClick("name", "desc")}>
            <span role="button" className="text-uppercase">
              Name DESC
            </span>
          </li>
          <li role="separator" className="divider"></li>
          <li onClick={() => this.handleClick("level", "asc")}>
            <span role="button" className="text-uppercase">
              Level ASC
            </span>
          </li>
          <li onClick={() => this.handleClick("level", "desc")}>
            <span role="button" className="text-uppercase">
              Level DESC
            </span>
          </li>
        </ul>{" "}
        <span className="label label-success label-medium">NAME - DESC</span>
        {this.renderSort()}
      </div>
    );
  }
}
export default Sort;
