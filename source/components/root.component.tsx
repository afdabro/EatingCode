import { History } from "history";
import * as React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router";
import { Store } from "redux";
import { appRoutes } from "../app.routes";

interface IRootProps {
    store: Store<{}>;
    history: History;
}

export class Root extends React.Component<IRootProps, {}> {
    public render(): JSX.Element {
        const { store, history } = this.props;
        return (
            <Provider store={store}>
                <Router history={history} routes={appRoutes} />
            </Provider>
        );
    }
}
