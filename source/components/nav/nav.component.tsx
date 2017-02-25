import * as React from "react";
import { Link } from "react-router";

require("./nav.scss");
import { IResponsiveModel } from "../../models/responsive.model";

export class NavComponent extends React.Component<IResponsiveModel, {}> {

    public render(): JSX.Element {
        return (
            <nav>
                <ul className="navList">
                    <li className="navLink"><Link to="/home" activeClassName="navLinkActive">{this.props.isDesktop ? "Home" : (<i className="material-icons">home</i>)}</Link></li>
                    <li className="navLink"><Link to="/about" activeClassName="navLinkActive">{this.props.isDesktop ? "About" : (<i className="material-icons">business center</i>)}</Link></li>
                </ul>
            </nav>
        );
    }
}
