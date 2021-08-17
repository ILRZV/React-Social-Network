const addPostRequestText = "ADD_POST";
const inputPostRequestText = "INPUT_POST";
const likePostRequestText = "LIKE_POST";

let initialState = {
  postsData: [
    {
      id: 1,
      date: { day: 24, month: 10, year: 2018, hours: 12, minutes: 56 },
      message: "Dont panic",
      likeCounter: 20,
      isLiked: false,
    },
    {
      id: 2,
      date: { day: 2, month: 3, year: 2019, hours: 22, minutes: 8 },
      message: "IS it somebody here",
      likeCounter: 25,
      isLiked: false,
    },
    {
      id: 3,
      date: { day: 14, month: 3, year: 2019, hours: 16, minutes: 21 },
      message: "I can't hear anything",
      likeCounter: 60,
      isLiked: false,
    },
    {
      id: 4,

      date: { day: 30, month: 5, year: 2020, hours: 0, minutes: 28 },
      message: "Where am i",
      likeCounter: 10,
      isLiked: false,
    },
    {
      id: 5,

      date: { day: 1, month: 7, year: 2020, hours: 13, minutes: 2 },
      message: "I think that i'm in capture",
      likeCounter: 20,
      isLiked: false,
    },
    {
      id: 6,
      date: { day: 10, month: 9, year: 2020, hours: 10, minutes: 30 },
      message: "What",
      likeCounter: 202,
      isLiked: false,
    },
  ],
  input: "",
  author: "Martial Anna",
};

export default function dialogsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case addPostRequestText:
      return {
        ...state,
        postsData: [
          ...state.postsData,
          {
            id: 5,
            date: {
              day: action.date.getDate(),
              month: action.date.getMonth(),
              year: action.date.getFullYear(),
              hours: action.date.getHours(),
              minutes: action.date.getMinutes(),
            },
            message: state.input,
            likeCounter: 0,
          },
        ],
        input: "",
      };
    case inputPostRequestText:
      return {
        ...state,
        input: action.newInput,
      };
    case likePostRequestText:
      return {
        postsData: state.postsData.map((element) => {
          if (element.id === action.id) {
            let likes = element.likeCounter;
            element.isLiked ? --likes : ++likes;
            return {
              ...element,
              isLiked: !element.isLiked,
              likeCounter: likes,
            };
          }
          return element;
        }),
      };
    default:
      return state;
  }
}

export const addPostRequest = (date) => {
  console.log(date);
  return {
    type: addPostRequestText,
    date: date,
  };
};
export const inputPostRequest = (text) => ({
  type: inputPostRequestText,
  newInput: text,
});
export const likePostRequest = (id) => ({
  type: likePostRequestText,
  id,
});
