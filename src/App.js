import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

const NewProductView = React.lazy(() => import("./views/NewProductView"));
const ProductsListView = React.lazy(() => import("./views/ProductsListView"));

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
          <Suspense fallback={<div>Loading...</div>}>
            <Route
              path={"/"}
              exact
              component={(props) => <NewProductView {...props} />}
            />
            <Route
              path={"/list"}
              component={(props) => <ProductsListView {...props} />}
            />
          </Suspense>
        </div>
      </Router>
    </div>
  );
}

export default App;
