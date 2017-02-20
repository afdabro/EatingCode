import Immutable from "immutable";
import {SAVE_RESPONSIVE} from "../constants/actionTypes";
import { initialState } from "./initilState.model";

export function responsiveReducer(state = initialState.responsiveModel, action) {

  switch (action.type) {
    case SAVE_RESPONSIVE:
      return Immutable.Map(state).set("dateModified", action.dateModified);

    default:
      return state;
  }
}
