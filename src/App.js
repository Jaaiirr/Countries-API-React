import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Search from "./components/Search";
import Countries from "./components/Countries";
import OneCountry from "./components/OneCountry";

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/">
        <Search />
        <Countries />
      </Route>
      <Route path="/countries/:name" children={<OneCountry />}></Route>
    </Router>
  );
}

export default App;
