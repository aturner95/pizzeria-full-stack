import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./store";
import HomeView from "./components/HomeView";
import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div clasName="App">
          <Route exact path="/" component={HomeView} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
