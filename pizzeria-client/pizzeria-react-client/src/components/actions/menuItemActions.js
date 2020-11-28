import axios from "axios";
import { GET_MENU_ITEMS } from "./types";

export const getMenuItems = () => async (dispatch) => {
  const res = await axios.get("http://localhost:10090/api/menu");
  dispatch({
    type: GET_MENU_ITEMS,
    payload: res.data,
  });
};
