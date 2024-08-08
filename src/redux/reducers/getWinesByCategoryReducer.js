import { GET_WINES } from "../actions/getWinesByCategory";

const initialState = {
  content: [],
  loading: true,
};

const getWinesByCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WINES:
      return {
        ...state,
        content: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default getWinesByCategoryReducer;
