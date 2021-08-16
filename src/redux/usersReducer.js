const followUserRequestText = "FOLLOW_USER";
const unFollowUserRequestText = "UNFOLLOW_USER";
const newUsersRequestText = "SET_USERS";

let initialState = {
  usersData: [],
};

export default function usersReducer(state = initialState, action = {}) {
  switch (action.type) {
    case followUserRequestText:
      return {
        ...state,
        usersData: state.usersData.map((user) => {
          if (user.id === action.userId) {
            return {
              ...user,
              followed: true,
            };
          }
          return user;
        }),
      };
    case unFollowUserRequestText:
      return {
        ...state,
        usersData: state.usersData.map((user) => {
          if (user.id === action.userId) {
            return {
              ...user,
              followed: false,
            };
          }
          return user;
        }),
      };
    case newUsersRequestText:
      return {
        ...state,
        usersData: [...state.usersData, ...action.users],
      };
    default:
      return state;
  }
}
export const followUserRequest = (id) => ({
  type: followUserRequestText,
  userId: id,
});
export const unFollowUserRequest = (id) => ({
  type: unFollowUserRequestText,
  userId: id,
});
export const newUsersRequest = (users) => ({
  type: newUsersRequestText,
  users,
});
