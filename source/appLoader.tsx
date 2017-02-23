import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { browserHistory , Router } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";

import {appRoutes} from "./app.routes";
import { configureStore } from "./store/configureStore";

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={appRoutes} />
  </Provider>,
  document.getElementById("root"),
);
