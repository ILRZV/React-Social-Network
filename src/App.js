import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

class App extends React.Component {
  state = {
    reverted: false,
  };
  revert = () => {
    this.setState({ reverted: !this.state.reverted });
  };
  render() {
    return (
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route component={Dialogs} />
          <Route component={Profile} />
        </div>
      </div>
    );
  }
}
export default App;
