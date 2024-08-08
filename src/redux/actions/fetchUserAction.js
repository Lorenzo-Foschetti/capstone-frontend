import axios from "axios";

export const GET_USER_LOGGED_PROFILE = "GET_USER_LOGGED_PROFILE";
export const GET_USER_CART = "GET_USER_CART";
export const TOGGLE_IS_LOGGED = "TOGGLE_IS_LOGGED";
export const TOGGLE_IS_LOGGED_OUT = "TOGGLE_IS_LOGGED_OUT";

export const fetchUserAction = (loginObject, navigate, setError) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("Token not found");
      }

      const userInfo = await dispatch(fetchUserInfoAction(token));

      const userId = userInfo.id;

      await dispatch(fetchUserCartAction(userId));

      navigate("/");
    } catch (err) {
      console.error(
        "Error logging in:",
        err.response?.data?.message || err.message
      );
      setError(
        err.response?.data?.message || "An error occurred during login."
      );
    }
  };
};

export const fetchUserInfoAction = (token) => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3001/users/me", {
        headers: { Authorization: "Bearer " + token },
      });
      console.log("User Info Response:", response.data);
      dispatch({
        type: GET_USER_LOGGED_PROFILE,
        payload: response.data,
      });
      return response.data;
    } catch (err) {
      console.error(
        "Error fetching user info:",
        err.response?.data?.message || err.message
      );
    }
  };
};

export const fetchUserCartAction = (userId) => {
  return async (dispatch) => {
    const token = localStorage.getItem("accessToken");
    try {
      const response = await axios.get(
        `http://localhost:3001/orders/user/${userId}`,
        {
          headers: { Authorization: "Bearer " + token },
        }
      );
      console.log("User Cart Response:", response.data);
      dispatch({
        type: GET_USER_CART,
        payload: response.data,
      });
    } catch (err) {
      console.error(
        "Error fetching user cart:",
        err.response?.data?.message || err.message
      );
    }
  };
};
