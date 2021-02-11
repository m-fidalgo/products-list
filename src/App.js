import React, { Suspense, useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

import { IntlProvider, FormattedMessage } from "react-intl";
import messages from "./i18n/messages";

const NewProductView = React.lazy(() => import("./views/NewProductView"));
const ProductsListView = React.lazy(() => import("./views/ProductsListView"));

function App() {
  const [currentLang, setCurrentLang] = useState(
    localStorage.getItem("lang") || "pt"
  );

  function setLanguage(lang) {
    localStorage.setItem("lang", lang);
    setCurrentLang(lang);
  }

  return (
    <div className="App">
      <IntlProvider locale={currentLang} messages={messages[currentLang]}>
        <Router>
          <div>
            <header>
              <ul className="link-list">
                <li>
                  <Link to={"/"}>
                    <FormattedMessage defaultMessage="New" id="menu.new" />
                  </Link>
                </li>
                <li>
                  <Link to={"/list"}>
                    <FormattedMessage defaultMessage="List" id="menu.list" />
                  </Link>
                </li>
              </ul>
              <ul className="lang-list">
                <li>
                  <button onClick={() => setLanguage("pt")}>Português</button>
                </li>
                <li>
                  <button onClick={() => setLanguage("en")}>English</button>
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
      </IntlProvider>
    </div>
  );
}

export default App;
