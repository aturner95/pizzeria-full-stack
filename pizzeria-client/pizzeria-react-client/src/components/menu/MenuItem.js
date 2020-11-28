import React, { Component } from "react";

class MenuItem extends Component {
  render() {
    const { menuItem } = this.props;
    return (
      <div className="container">
        <div className="row bg-light">
          <div className="col-8">
            <span>
              <h3>{menuItem.menuItemTitle}</h3>
            </span>
          </div>
          <div className="col-4"> £{menuItem.menuItemPrice}</div>
        </div>
        <div className="row">
          <div className="col-12">
            <span>
              <p>{menuItem.menuItemDescription}</p>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuItem;
