import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { Provider } from "react-redux";
import { Router } from "react-router";

import { appRoutes } from "./app.routes";
import { configureStore } from "./store/configureStore";
import { syncImmutableHistoryWithStore } from "./store/immutablerouter.store";

import "normalize.css";

// currently not setting initial state
const store = configureStore(undefined);
const history = syncImmutableHistoryWithStore(store);

const rootElement = document.getElementById("root");
// tslint:disable-next-line:variable-name
const App = () => (<Provider store={store}>
  <Router history={history} routes={appRoutes} />
</Provider>);

// tslint:disable-next-line:variable-name
const render = (Component) =>
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootElement,
  );

render(App);

if (module.hot) {
  module.hot.accept("./app.routes", () => render(App));
}
