import {SAVE_RESPONSIVE} from "../constants/actionTypes";
import { InitialStateModel } from "./initilState.model";

export function responsiveReducer(state = new InitialStateModel().responsiveModel, action) {

// TODO: use immutable
  switch (action.type) {
    case SAVE_RESPONSIVE:
      return objectAssign({}, state, {"dateModified": action.dateModified});

    default:
      return state;
  }
}
