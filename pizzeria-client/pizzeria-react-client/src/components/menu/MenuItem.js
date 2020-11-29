import React, { Component } from "react";

class MenuItem extends Component {
  render() {
    const { menuItem } = this.props;

    const vegInd = "(v)";

    let isVeg;

    console.log(menuItem.vegetarian);

    if (menuItem.vegetarian === true) {
      isVeg = vegInd;
    }

    return (
      <div className="container">
        <div className="row bg-light">
          <div className="col-8">
            <span>
              <h3>
                {menuItem.title} {isVeg}
              </h3>
            </span>
          </div>
          <div className="col-4"> £{menuItem.price}</div>
        </div>
        <div className="row">
          <div className="col-12">
            <span>
              <p>{menuItem.description}</p>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuItem;
