import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Header from "./components/Header";
import Countries from "./components/Countries";
import OneCountry from "./components/OneCountry";

function App() {
  return (
    <Router> 
      <Header />
      <Route  exact path="/" >
        <Countries />
      </Route>
      <Route path="/countries/:name" children={<OneCountry />}></Route>
      
    </Router>
  );
}

export default App;
