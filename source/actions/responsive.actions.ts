import * as types from "../constants/actionTypes";
import { getFormattedDateTime } from "../utils/dateHelper";

// TODO: Change to class
export function saveResponsive(settings) {
    return (dispatch) => {
        return dispatch({
            "dateModified": getFormattedDateTime(),
            "type": types.SAVE_RESPONSIVE,
            settings,
        });
    };
}
