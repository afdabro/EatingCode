import { Map } from "immutable";
import { SAVE_RESPONSIVE } from "../constants/actionTypes";
import { initialState } from "./initilState.model";

export function responsiveReducer(state = initialState.responsiveModel, action) {
  let newState;
  switch (action.type) {
    case SAVE_RESPONSIVE:
      newState = Map(state);
      const alteredState = newState.set("dateModified", action.dateModified).set("isDesktop", action.settings.isDesktop);
      return alteredState;
    default:
      return state;
  }
}
