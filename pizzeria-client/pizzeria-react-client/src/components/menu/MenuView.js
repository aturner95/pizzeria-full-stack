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

    return (
      <div className="menu-items">
        <div className="container">
          <Link to={"/"}>Home</Link>
          <div className="row">
            <div className="col-3">
              <h1 className="display-4 text-center">Menu</h1>

              {menuItems.map((menuItem) => (
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
