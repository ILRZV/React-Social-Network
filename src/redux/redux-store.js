import { combineReducers, createStore } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
  dialogsData: dialogsReducer,
  profileData: profileReducer,
  usersData: usersReducer,
});

let store = createStore(reducers);

export default store;
