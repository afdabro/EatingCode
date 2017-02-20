import { applyMiddleware, compose, createStore } from "redux";
// import immutableStateInvariantMiddleware from "redux-immutable-state-invariant";
import thunk from "redux-thunk";
import { rootReducer } from "../reducers";

function configureStoreProd(initialState?) {
  const middlewares = [
    // Add other middleware on this line...

    // thunk middleware can also accept an extra argument to be passed to each thunk action
    // https://github.com/gaearon/redux-thunk#injecting-a-custom-argument
    thunk,
  ];

  return createStore(rootReducer, initialState, compose(applyMiddleware(...middlewares)));
}

function configureStoreDev(initialState?) {
  const middlewares = [
    // Add other middleware on this line...

    // Redux middleware that spits an error on you when you try to mutate your state either inside a dispatch or between dispatches.
    // immutableStateInvariantMiddleware, // TODO: Investigate getting invariant middleare working

    // thunk middleware can also accept an extra argument to be passed to each thunk action
    // https://github.com/gaearon/redux-thunk#injecting-a-custom-argument
    thunk,
  ];

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
  const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middlewares)));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("../reducers", () => {
      const nextReducer = require("../reducers").default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

export const configureStore = process.env.NODE_ENV === "production" ? configureStoreProd : configureStoreDev;

// Make typescript happy :)

// tslint:disable-next-line:no-namespace
// tslint:disable-next-line:no-namespace
declare global {
    // tslint:disable-next-line:interface-name
    interface Window {
      // tslint:disable-next-line:no-any
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
    }

    // tslint:disable-next-line:interface-name
    interface NodeModule {
        hot: {
            // tslint:disable-next-line:array-type
            accept(dependencies: string[], callback: (updatedDependencies: string[]) => void): void;
            accept(dependency: string, callback: () => void): void;
            // tslint:disable-next-line:no-any
            accept(errHandler?: (err: any) => void): void;
        };
    }
}
