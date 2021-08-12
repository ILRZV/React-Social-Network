import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route
            path="/profile"
            render={() => (
              <Profile
                state={props.state.profileData}
                addPost={props.addPost}
                inputChange={props.inputChange}
              />
            )}
          />
          <Route
            path="/dialogs"
            render={() => <Dialogs state={props.state.dialogsData} />}
          />
          {/* <Route path="/news" component={Profile} />
            <Route path="/music" component={Profile} />
            <Route path="/settings" component={Profile} /> */}
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
