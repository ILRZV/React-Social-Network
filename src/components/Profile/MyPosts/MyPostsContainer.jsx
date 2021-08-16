import MyPosts from "./MyPosts";
import {
  addPostRequest,
  inputPostRequest,
  likePostRequest,
} from "../../../redux/profileReducer";
import { connect } from "react-redux";
// function MyPostsContainer() {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let data = store.getState();
//         let handleChangeInput = (text) => {
//           store.dispatch(inputPostRequest(text));
//         };

//         let handleAddPost = () => {
//           store.dispatch(addPostRequest());
//         };
//         return (
//           <MyPosts
//             postsData={data.profileData.postsData}
//             addPost={handleAddPost}
//             changeInput={handleChangeInput}
//           ></MyPosts>
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// }
let mapStateToProps = (state) => {
  return {
    postsData: state.profileData.postsData,
    author: state.profileData.author,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostRequest());
    },
    changeInput: (text) => {
      dispatch(inputPostRequest(text));
    },
    likePost: (id) => {
      dispatch(likePostRequest(id));
    },
  };
};
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
