import simon from "../images/Simon.jpg";
import peter from "../images/Peter.jpg";
import mary from "../images/Mary.jpg";
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
  get getState() {
    return this._state;
  },
  inputChange(newInput) {
    console.log(this);
    this.state.profileData.input = newInput;
    this.rerenderEntireTree(store);
  },
  addPost() {
    debugger;
    let post = {
      id: 5,
      message: this.state.profileData.input,
      likeCounter: 0,
    };
    this.state.profileData.postsData.push(post);
    this.state.profileData.input = "";
    this.rerenderEntireTree();
  },
  rerenderEntireTree: () => {},
  subscribe(observer) {
    this.rerenderEntireTree = observer;
  },
};

export default store;
window.store = store;
