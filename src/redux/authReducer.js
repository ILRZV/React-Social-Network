const setUserDataRequestText = "SET_USER_DATA";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isLogin: false,
};

export default function usersReducer(state = initialState, action = {}) {
  switch (action.type) {
    case setUserDataRequestText:
      console.log(action);
      return {
        ...state,
        ...action.data,
        isLogin: true,
      };
    default:
      return state;
  }
}

export const setUserData = (userId, email, login) => ({
  type: setUserDataRequestText,
  data: { userId, email, login },
});
