import React from "react";
import NewProductView from "./views/NewProductView";
import ProductsListView from "./views/ProductsListView";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NewProductView />
      <ProductsListView />
    </div>
  );
}

export default App;
