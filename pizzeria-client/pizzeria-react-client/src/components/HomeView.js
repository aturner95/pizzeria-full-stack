import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";

class HomeView extends Component {
  render() {
    return (
      <div className="menu-items">
        <div className="container">
          <div className="row">
            <div className="col=md-12">
              <h1 className="display-4 text-center">Pizza Shop</h1>
              <p>Welcome to the pizza resturant page</p>
              <p>This is another paragraph</p>
              <p>
                Apologies for how dumb this reads i have no idea what goes on a
                website
              </p>
              <Link to={`/menu`}>A link to our Menu</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default HomeView;
