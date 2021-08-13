import { combineReducers, createStore } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let reducers = combineReducers({
  dialogsData: dialogsReducer,
  profileData: profileReducer,
});

let store = createStore(reducers);

export default store;
