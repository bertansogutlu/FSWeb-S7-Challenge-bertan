import React from "react";
import "./App.css";
import Form from "./components/Form";
import Main from "./components/Main";
import MainHeader from "./components/Header"
import { BrowserRouter, Route } from "react-router-dom";


const App = () => {
  return (
    <BrowserRouter>
      <MainHeader />
      <Route exact path="/">
        <Main />
      </Route>
      <Route exact path="/pizza">
        <Form />
      </Route>
    </BrowserRouter>
  );
};
export default App;
