import React from "react";
import NewProductView from "./views/NewProductView";
import ProductsListView from "./views/ProductsListView";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <header>
            <ul className="link-list">
              <li>
                <Link to={"/"}>Novo</Link>
              </li>
              <li>
                <Link to={"/list"}>Lista</Link>
              </li>
            </ul>
          </header>
        </div>
        <div>
          <Route path={"/"} exact component={NewProductView} />
          <Route path={"/list"} component={ProductsListView} />
        </div>
      </Router>
    </div>
  );
}

export default App;
