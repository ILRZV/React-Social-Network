const addPostRequestText = "ADD_POST";
const inputPostRequestText = "INPUT_POST";

export default function dialogsReduser(action, state) {
  switch (action.type) {
    case addPostRequestText:
      let post = {
        id: 5,
        message: state.input,
        likeCounter: 0,
      };
      state.postsData.push(post);
      state.input = "";
      return state;
    case inputPostRequestText:
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
