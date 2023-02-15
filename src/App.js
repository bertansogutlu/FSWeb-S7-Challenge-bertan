import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Form from "./components/Form";
import Main from "./components/Main";
import MainHeader from "./components/Header"
import Confirmation from "./components/Confirmation";



const App = () => {
  const [siparisData, setSiparisData] = useState ({})
  return (
    <BrowserRouter>
      <MainHeader />
      <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Route exact path="/pizza">
        <Form setSiparisData={setSiparisData}/>
      </Route>
      <Route exact path="/confirmation">
        <Confirmation siparisData={siparisData}/>
      </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default App;
