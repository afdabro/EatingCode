export interface IResponsiveModel {
    dateModified?: Date;
    isDesktop: boolean;
}

export interface IResponsiveProps extends IResponsiveModel {
    saveResponsive(model: IResponsiveModel);
}
