import { Map } from "immutable";
import { SAVE_RESPONSIVE } from "../constants/actionTypes";

export function responsiveReducer(state = {}, action) {
  switch (action.type) {
    case SAVE_RESPONSIVE:
      const stateContext = Map(state);
      return stateContext.merge({
        "dateModified": action.dateModified,
        "isDesktop": action.settings.isDesktop,
      });
    default:
      return state;
  }
}
