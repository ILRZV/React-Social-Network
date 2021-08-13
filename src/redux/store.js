import simon from "../images/Simon.jpg";
import peter from "../images/Peter.jpg";
import mary from "../images/Mary.jpg";
import profileReducer from "./profileReducer";
import dialogsReduser from "./dialogsReduser";

let store = {
  _state: {
    dialogsData: {
      dialogData: [
        { id: 1, name: "Simon" },
        { id: 2, name: "Peter" },
        { id: 3, name: "Mary" },
        { id: 4, name: "Pol" },
        { id: 5, name: "Jane" },
        { id: 6, name: "Solomon" },
      ],
      input: "",
      messagesData: [
        { id: 1, message: "Hello wordl" },
        { id: 2, message: "World is fire" },
        { id: 3, message: "What are you doing" },
        { id: 4, message: "You are so lazy" },
        { id: 5, message: "Post malone is not cool" },
        { id: 6, message: "Solomon" },
      ],
    },
    profileData: {
      postsData: [
        { id: 1, message: "Dont panic", likeCounter: 20 },
        { id: 2, message: "IS it somebody here", likeCounter: 25 },
        { id: 3, message: "I can't hear anything", likeCounter: 60 },
        { id: 4, message: "Where am i", likeCounter: 10 },
        { id: 5, message: "I think that i'm in capture", likeCounter: 20 },
        { id: 6, message: "What", likeCounter: 202 },
      ],
      input: "",
      friendsData: [
        { id: 1, name: "Simon", src: { simon } },
        { id: 2, name: "Peter", src: { peter } },
        { id: 3, name: "Mary", src: { mary } },
      ],
    },
  },
  getState() {
    return this._state;
  },
  rerenderEntireTree: () => {},

  subscribe(observer) {
    this.rerenderEntireTree = observer;
  },
  dispatch(action) {
    this._state.profileData = profileReducer(action, this._state.profileData);
    this._state.dialogsData = dialogsReduser(action, this._state.dialogsData);
    this.rerenderEntireTree(store);
  },
};

export default store;
window.store = store;
