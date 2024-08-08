import { GET_USERS } from "../actions/GetUsersAction";

const initialState = {
  content: [],
  loading: true,
};

const getUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        content: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default getUsersReducer;
