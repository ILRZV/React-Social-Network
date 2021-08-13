const addMessageRequestText = "ADD_MESSAGE";
const inputMessageRequestText = "INPUT_MESSAGE";

export default function dialogsReduser(action, state) {
  switch (action.type) {
    case addMessageRequestText:
      let message = {
        id: 5,
        message: state.input,
      };
      state.messagesData.push(message);
      state.input = "";
      return state;
    case inputMessageRequestText:
      state.input = action.newInput;
      return state;
    default:
      return state;
  }
}

export const addMessageRequest = () => ({
  type: addMessageRequestText,
});
export const inputMessageRequest = (text) => ({
  type: inputMessageRequestText,
  newInput: text,
});
