import {
  GET_BOTTLE_DETAILS,
  GET_BOTTLE_DETAILS_LOADING,
  GET_BOTTLE_DETAILS_ERROR,
} from "../actions/getBottleDetailsAction";

const initialState = {
  details: null,
  loading: true,
  error: null,
};

const getBottleDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOTTLE_DETAILS_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_BOTTLE_DETAILS:
      return {
        ...state,
        details: action.payload,
        loading: false,
      };
    case GET_BOTTLE_DETAILS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default getBottleDetailsReducer;
