import { Component } from "react";

class Item extends Component<any> {
  render() {
    let classNameLabel: string = "";
    let nameLabel: string = "";
    switch (this.props.level) {
      case 1:
        classNameLabel = "label label-warning";
        nameLabel = "Medium";
        break;
      case 2:
        classNameLabel = "label label-danger";
        nameLabel = "Hight";
        break;
      default:
        classNameLabel = "label label-info";
        nameLabel = "Low";
        break;
    }
    return (
      <tr key={this.props.id}>
        <td className="text-center">{this.props.id}</td>
        <td>{this.props.name}</td>
        <td className="text-center">
          <span className={classNameLabel}>{nameLabel}</span>
        </td>
        <td>
          <button type="button" className="btn btn-warning btn-sm">
            Edit
          </button>
          <button
            type="button"
            className="btn btn-danger btn-sm"
            onClick={() => this.props.handleShowAlert(this.props.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
export default Item;
