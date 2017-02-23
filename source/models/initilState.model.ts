import { Record } from "immutable";
import { IResponsiveModel } from "./responsive.model";

class InitialStateModel {
    public responsiveModel: IResponsiveModel = {
        "dateModified": new Date(),
        "isDesktop": false,
    };
};

const initialStateContext = Record(new InitialStateModel());
export const initialState = new initialStateContext();
