import { applyMiddleware, compose, createStore } from "redux";
import createLogger from "redux-logger";
import thunk from "redux-thunk";
import { devTools } from "../containers/DevTools";
// import rootReducer from "../reducers";

export const configureStore = (preloadedState) => {
    const store = createStore(
        // rootReducer,
        preloadedState,
        compose(
            applyMiddleware(thunk, createLogger()),
            devTools().instrument(),
        ),
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept("../reducers", () => {
            // const nextRootReducer = require("../reducers").default;
            // store.replaceReducer(nextRootReducer);
        });
    }

    return store;
};

// Make typescript happy :)
// tslint:disable-next-line:no-namespace
// tslint:disable-next-line:no-namespace
declare global {
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