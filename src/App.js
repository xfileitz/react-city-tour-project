import React, { Component } from "react";
//import logo from './logo.svg';
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import TourList from "./components/TourList";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <TourList />
      </React.Fragment>
    );
  }
}

export default App;
