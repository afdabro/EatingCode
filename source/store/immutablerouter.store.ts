import { browserHistory } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";
export const syncImmutableHistoryWithStore = (store) => syncHistoryWithStore(browserHistory, store, {
    // tslint:disable-next-line:object-literal-key-quotes
    selectLocationState(state) {
        return state.get("routing").toJS();
    // tslint:disable-next-line:trailing-comma
    }
});
