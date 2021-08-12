import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/state";

let rerenderErniteTree = (store) => {
  ReactDOM.render(
    <App
      state={store.getState}
      addPost={store.addPost}
      inputChange={store.inputChange}
    />,
    document.getElementById("root")
  );
};

rerenderErniteTree(store);
store.subscribe(rerenderErniteTree);
