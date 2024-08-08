import { CREATE_BOTTLE } from "../actions/CreateBottle";
import { DELETE_BOTTLE } from "../actions/deleteBottle";
import { UPDATE_BOTTLE } from "../actions/updateBottleAction";
import {
  UPLOAD_IMAGE_FAILURE,
  UPLOAD_IMAGE_SUCCESS,
} from "../actions/UploadImage";

const initialState = {
  content: null,
  loading: true,
};

const CrudBottleReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOTTLE:
      return {
        ...state,
        content: [...state.content, action.payload],
        loading: false,
      };

    case DELETE_BOTTLE:
      return {
        ...state,
        content: state.content?.filter(
          (bottle) => bottle.id !== action.payload
        ),
        loading: false,
      };

    case UPDATE_BOTTLE:
      return {
        ...state,
        content: state.content.map((bottle) =>
          bottle.id === action.payload.id ? action.payload : bottle
        ),
        loading: false,
      };

    case UPLOAD_IMAGE_SUCCESS:
      return {
        ...state,
        uploadMessage: action.payload,
        loading: false,
      };

    case UPLOAD_IMAGE_FAILURE:
      return {
        ...state,
        uploadError: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default CrudBottleReducer;
