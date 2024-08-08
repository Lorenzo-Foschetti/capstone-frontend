import axios from "axios";
import { fetchUserCartAction } from "./fetchUserAction";

export const ADD_BOTTLE_TO_CART = "ADD_BOTTLE_TO_CART";

export const addBottleToCAart = (bottleId, orderId) => {
  return async (dispatch, getState) => {
    const token = localStorage.getItem("accessToken");
    try {
      const response = await axios.post(
        `http://localhost:3001/orders/add/${bottleId}/${orderId}`,
        {},
        {
          headers: { Authorization: "Bearer " + token },
        }
      );
      console.log("Add to cart response:", response.data);

      dispatch({
        type: ADD_BOTTLE_TO_CART,
        payload: response.data,
      });

      const userId = getState().user.user_info.id;
      if (userId) {
        dispatch(fetchUserCartAction(userId));
      } else {
        console.error("User ID is missing");
      }
    } catch (err) {
      console.error(
        "Error adding to cart:",
        err.response?.data?.message || err.message
      );
    }
  };
};
