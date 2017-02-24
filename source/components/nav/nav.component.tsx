import * as React from "react";
import { Link } from "react-router";

import { IResponsiveModel } from "../../models/responsive.model";

export class NavComponent extends React.Component<IResponsiveModel, {}> {

    public render(): JSX.Element {
        return (
            <nav>
                <ul>
                    <li><Link to="/home">{this.props.isDesktop ? "Home" : (<i className="material-icons">home</i>)}</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
        );
    }
}
