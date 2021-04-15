import React, { Component } from "react";

class ItemEdit extends Component<any> {
  renderLevel = () => {
    let { arrayLevel } = this.props;
    return arrayLevel.map((level: any, index: any) => {
      switch (level) {
        case 0:
          return (
            <option key={index} value={level}>
              Low
            </option>
          );
        case 1:
          return (
            <option key={index} value={level}>
              Medium
            </option>
          );
        default:
          return (
            <option key={index} value={level}>
              High
            </option>
          );
      }
    });
  };
  render() {
    return (
      <tr>
        <td className="text-center">{this.props.indexEdit + 1}</td>
        <td>
          <input
            type="text"
            className="form-control"
            defaultValue={this.props.nameEdit}
            onChange={this.props.handleEditInputChange}
          />
        </td>
        <td
          className="text-center"
          defaultValue={this.props.levelEdit}
          onChange={this.props.handleEditChangeSelect}
        >
          <select className="form-control">{this.renderLevel()}</select>
        </td>
        <td>
          <button
            type="button"
            className="btn btn-default btn-sm"
            onClick={() => this.props.handleEditClickCancel()}
          >
            Cancel
          </button>
          <button
            type="button"
            className="btn btn-success btn-sm"
            onClick={() => this.props.handleEditClickSubmit()}
          >
            Save
          </button>
        </td>
      </tr>
    );
  }
}
export default ItemEdit;
