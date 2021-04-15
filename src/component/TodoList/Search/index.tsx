import React, { Component } from "react";

class Search extends Component<any> {
  render() {
    return (
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search item name"
          value={this.props.valueSearch}
          onChange={this.props.handleSearch}
        />
        <span className="input-group-btn">
          <button
            className="btn btn-info"
            type="button"
            onClick={this.props.handleSearchClickClear}
          >
            Clear
          </button>
        </span>
      </div>
    );
  }
}
export default Search;
