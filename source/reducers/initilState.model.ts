import { ResponsiveModel } from "./responsive.model";

class InitialStateModel {
    public responsiveModel: ResponsiveModel = new ResponsiveModel();
};

export const initialState = new InitialStateModel();
