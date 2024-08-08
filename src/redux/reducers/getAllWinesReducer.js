import { GET_ALLWINES } from "../actions/getAllWinesAction";

const initialState = {
  content: [],
  loading: true,
};

const getAllWinesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALLWINES:
      return {
        ...state,
        content: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default getAllWinesReducer;
