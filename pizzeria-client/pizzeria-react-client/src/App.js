import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./store";
import HomeView from "./components/home/HomeView";
import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MenuView from "./components/menu/MenuView";
import NavigationBar from "./components/header/NavigationBar";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <NavigationBar />
          <Route exact path="/" component={HomeView} />
          <Route exact path="/menu" component={MenuView} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
