import React, { Component } from "react";
import MenuItem from "./MenuItem";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getMenuItems } from "../actions/menuItemActions";

class MenuView extends Component {
  componentDidMount() {
    this.props.getMenuItems();
  }

  render() {
    const { menuItems } = this.props.menuItem;

    let starters = [];
    let pizzas = [];
    let antiPastas = [];

    for (let i = 0; i < menuItems.length; i++) {
      let type = menuItems[i].menuItemType;
      switch (type) {
        case "STARTER":
          starters.push(menuItems[i]);
          break;
        case "PIZZA":
          pizzas.push(menuItems[i]);
          break;
        case "ANTIP":
          antiPastas.push(menuItems[i]);
          break;
      }
    }

    return (
      <div className="menu-items">
        <div className="container">
          <Link to={"/"}>Home</Link>
          <div className="row">
            <div className="col-md-4">
              <h1 className="display-4 text-center">Menu</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <h3 className="display-4 text-center">Starters</h3>

              {starters.map((menuItem) => (
                <MenuItem key={menuItem.id} menuItem={menuItem} />
              ))}
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <h3 className="display-4 text-center">Pizza</h3>

              {pizzas.map((menuItem) => (
                <MenuItem key={menuItem.id} menuItem={menuItem} />
              ))}
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <h3 className="display-4 text-center">Anti-pasta</h3>

              {antiPastas.map((menuItem) => (
                <MenuItem key={menuItem.id} menuItem={menuItem} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MenuView.propTypes = {
  menuItem: PropTypes.object.isRequired,
  getMenuItems: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  menuItem: state.menuItem,
});

export default connect(mapStateToProps, { getMenuItems })(MenuView);
