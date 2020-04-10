import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";

import { Switch, Route } from "react-router-dom";

const ItemPage = (props) => {
  return (
    <div>
      <h1>{props.match.params.item.toUpperCase()} PAGE</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route path="/shop/:item" component={ItemPage} />
      </Switch>
    </div>
  );
}

export default App;
