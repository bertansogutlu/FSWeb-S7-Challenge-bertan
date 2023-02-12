import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Form from "./components/Form";
import Main from "./components/Main";
import MainHeader from "./components/Header"
import Confirmation from "./components/Confirmation";


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
      <Route exact path="/confirmation">
        <Confirmation />
      </Route>
    </BrowserRouter>
  );
};
export default App;
