import {
  GET_USER_CART,
  GET_USER_LOGGED_PROFILE,
  TOGGLE_IS_LOGGED,
  TOGGLE_IS_LOGGED_OUT,
} from "../actions/fetchUserAction";

const initialState = {
  isLogged: false,
  token: "",
  user_info: null,
  cart_info: null,
};

const fetchUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_IS_LOGGED:
      return {
        ...state,
        isLogged: true,
      };
    case TOGGLE_IS_LOGGED_OUT:
      return {
        ...state,
        isLogged: false,

        user_info: null,
        cart_info: null,
      };

    case GET_USER_LOGGED_PROFILE:
      return {
        ...state,
        user_info: action.payload,
        isLogged: true,
      };
    case GET_USER_CART:
      return {
        ...state,
        cart_info: action.payload,
      };

    default:
      return state;
  }
};

export default fetchUserReducer;
