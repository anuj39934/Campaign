import React, { Component } from "react";
import "./styles/appStyles.scss";
import Header from "./components/Header/Header";
import Dropdown from "./components/Dropdown/Dropdown";
import { appConfig } from "./constants/config";
import ListItem from "./components/ListItem/ListItem";
import CustomModal from './components/Modal/Modal';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title={appConfig.headerTitle} />
        <div className="main-body">
          <div className="main-body-nav">
            <Dropdown />
          </div>
          <div className="main-body-layout">
            <div className="main-body-layout-list">
              <ListItem />
            </div>
            <div className="main-body-layout-comment" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
