import { Record } from "immutable";
import { SAVE_RESPONSIVE } from "../constants/actionTypes";
import { initialState } from "../models/initilState.model";

export function responsiveReducer(state = initialState.get("responsiveModel"), action) {
  switch (action.type) {
    case SAVE_RESPONSIVE:
      const stateContext = Record(state);
      return new stateContext({
        "dateModified": action.dateModified,
        "isDesktop": action.settings.isDesktop,
      });
    default:
      if (typeof (state) !== typeof (Record)) {
        return Record(state);
      } else {
        return state;
      }
  }
}
