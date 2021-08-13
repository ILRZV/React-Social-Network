const addPostRequestText = "ADD_POST";
const inputPostRequestText = "INPUT_POST";

let initialState = {
  postsData: [
    { id: 1, message: "Dont panic", likeCounter: 20 },
    { id: 2, message: "IS it somebody here", likeCounter: 25 },
    { id: 3, message: "I can't hear anything", likeCounter: 60 },
    { id: 4, message: "Where am i", likeCounter: 10 },
    { id: 5, message: "I think that i'm in capture", likeCounter: 20 },
    { id: 6, message: "What", likeCounter: 202 },
  ],
  input: "",
};

export default function dialogsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case addPostRequestText:
      let post = {
        id: 5,
        message: state.input,
        likeCounter: 0,
      };
      console.log("add");
      state.postsData.push(post);
      state.input = "";
      return state;
    case inputPostRequestText:
      console.log("input");
      state.input = action.newInput;
      return state;
    default:
      return state;
  }
}
export const addPostRequest = () => ({ type: addPostRequestText });
export const inputPostRequest = (text) => ({
  type: inputPostRequestText,
  newInput: text,
});
