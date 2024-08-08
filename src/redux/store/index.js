import { combineReducers, configureStore } from "@reduxjs/toolkit";
import getUsersReducer from "../reducers/getUsersReducer";
import getWinesByCategoryReducer from "../reducers/getWinesByCategoryReducer";
import getAllWinesReducer from "../reducers/getAllWinesReducer";
import CrudBottleReducer from "../reducers/CrudBottleReducer";
import fetchUserReducer from "../reducers/fetchUserReducer";
import getBottleDetailsReducer from "../reducers/getBottleDetailsReducer";

const rootReducer = combineReducers({
  getUsers: getUsersReducer,
  getWinesByCategory: getWinesByCategoryReducer,
  getAllWines: getAllWinesReducer,
  crudBottle: CrudBottleReducer,
  user: fetchUserReducer,
  bottleDetails: getBottleDetailsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
