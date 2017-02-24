import * as React from "react";
import { Link } from "react-router";

require("./nav.scss");
import { IResponsiveModel } from "../../models/responsive.model";

export class NavComponent extends React.Component<IResponsiveModel, {}> {

    public render(): JSX.Element {
        return (
            <nav>
                <ul className="tileList">
                    <li className="tile"><Link to="/home">{this.props.isDesktop ? "Home" : (<i className="material-icons">home</i>)}</Link></li>
                    <li className="tile"><Link to="/about">{this.props.isDesktop ? "About" : (<i className="material-icons">business center</i>)}</Link></li>
                </ul>
            </nav>
        );
    }
}
