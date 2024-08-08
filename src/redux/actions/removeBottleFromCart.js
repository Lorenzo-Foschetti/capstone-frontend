import axios from "axios";
import { fetchUserCartAction } from "./fetchUserAction";

const REMOVE_BOTTLE_FROM_CART = " REMOVE_BOTTLE_FROM_CART";

export const removeBottleFromCart = (bottleId, cartId) => {
  return async (dispatch, getState) => {
    const token = localStorage.getItem("accessToken");
    try {
      const response = await axios.post(
        `http://localhost:3001/orders/remove/${bottleId}/${cartId}`,
        {},
        {
          headers: { Authorization: "Bearer " + token },
        }
      );
      console.log("Add to cart response:", response.data);

      dispatch({
        type: REMOVE_BOTTLE_FROM_CART,
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
