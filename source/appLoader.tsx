import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router";

import { appRoutes } from "./app.routes";
import { configureStore } from "./store/configureStore";
import { syncImmutableHistoryWithStore } from "./store/immutablerouter.store";

import "normalize.css";

// currently not setting initial state
const store = configureStore(undefined);
const history = syncImmutableHistoryWithStore(store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={appRoutes} />
  </Provider>,
  document.getElementById("root"),
);
