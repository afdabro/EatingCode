import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";

import { configureStore } from "./store/configureStore";
import { syncImmutableHistoryWithStore } from "./store/immutablerouter.store";

import "normalize.css";
import { Root } from "./components/root.component";

// currently not setting initial state
const store = configureStore(undefined);
const history = syncImmutableHistoryWithStore(store);

ReactDOM.render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById("root"));

if (module.hot) {
  module.hot.accept("./components/root.component", () => {

    ReactDOM.render(
      <AppContainer>
        <Root store={store} history={history} />
      </AppContainer>,
      document.getElementById("root"));
  });
}
