import {routerReducer} from "react-router-redux";
import { combineReducers } from "redux";

import { responsiveReducer } from "./responsive.reducer";

export const rootReducer = combineReducers({
  responsiveReducer,
  "routing": routerReducer,
});
