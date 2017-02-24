import * as React from "react";

import { IResponsiveProps } from "../../models/responsive.model";

export class ResponsiveComponent extends React.Component<IResponsiveProps, {}> {

    private mql: MediaQueryList;

    constructor(props) {
        super(props);
        this.mql = window.matchMedia("(min-width: 32em)");
        this.handleDesktopChange(this.mql);
        this.mql.addListener(this.handleDesktopChange.bind(this));
    }

    public render(): JSX.Element {
        return (
            <div className="display-none" />
        );
    }

    public handleDesktopChange(mediaQueryList: MediaQueryList) {
        let isDesktop;
        if (mediaQueryList.matches) {
            isDesktop = true;
        } else {
            isDesktop = false;
        }

        this.updateState(isDesktop);
    }

    private updateState(isDesktop: boolean) {
        this.props.saveResponsive({
            "isDesktop": isDesktop,
        });
    }
}
