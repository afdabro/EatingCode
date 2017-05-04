import { combineReducers } from "redux-immutable";
import { immutableRouterReducer } from "./immutablerouter.reducer";
import { responsiveReducer } from "./responsive.reducer";

export const rootReducer = combineReducers({
  "responsiveModel": responsiveReducer,
  "routing": immutableRouterReducer,
});
