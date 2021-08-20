import { combineReducers, createStore } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

let reducers = combineReducers({
  dialogsData: dialogsReducer,
  profileData: profileReducer,
  usersData: usersReducer,
  authData: authReducer,
});

let store = createStore(reducers);

export default store;
