import { GET_MENU_ITEMS } from "../components/actions/types";

const initialState = {
  menuItems: [],
  menuItem: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_MENU_ITEMS:
      return { ...state, menuItems: action.payload };

    default:
      return state;
  }
}
