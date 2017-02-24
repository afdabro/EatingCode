import { fromJS } from "immutable";
import { LOCATION_CHANGE } from "react-router-redux";

const initialState = fromJS({
    // tslint:disable-next-line:no-null-keyword
    "locationBeforeTransitions": null,
});

export const immutableRouterReducer = (state = initialState, action) => {
    if (action.type === LOCATION_CHANGE) {
        return state.set("locationBeforeTransitions", action.payload);
    }

    return state;
};
