import React from "react";
import Form from "./components/Form";
import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
        <Route exact path="/">
        <h1>Teknolojik Yemekler</h1>
        <p>Burdaki kodu silip kendi headerınızı ekleyebilirsiniz</p>
        </Route>
        <Route exact path="/pizza">
        <Form/>
        </Route>

    </BrowserRouter>
  );
};
export default App;
