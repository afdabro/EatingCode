import * as types from "../constants/actionTypes";
import { getFormattedDateTime } from "../utils/dateHelper";

export function saveResponsive(settings) {
    return (dispatch) => {
        return dispatch({
            "dateModified": getFormattedDateTime(),
            "type": types.SAVE_RESPONSIVE,
            settings,
        });
    };
}
