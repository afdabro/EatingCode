import * as React from "react";
import * as Helmet from "react-helmet";
import { Link } from "react-router";

require("./nav.scss");
import { IResponsiveModel } from "../../models/responsive.model";

export class NavComponent extends React.Component<IResponsiveModel, {}> {

    public render(): JSX.Element {
        const currentPath = this.getNavTitle();
        return (
            <nav className="navContainer">
                <Helmet title={currentPath} />
                <ul className="navList">
                    <li className="navLink"><Link to="/home" activeClassName="navLinkActive">{this.props.isDesktop ? "Home" : (<i className="material-icons">home</i>)}</Link></li>
                    <li className="navLink"><Link to="/about" activeClassName="navLinkActive">{this.props.isDesktop ? "About" : (<i className="material-icons">business center</i>)}</Link></li>
                </ul>
            </nav>
        );
    }

    private getNavTitle() {
        // Note: This only works for simple one level navigations
        const currentPath = window.location.pathname.replace("/", "");
        if (currentPath) {
            return currentPath[0].toUpperCase() + currentPath.slice(1);
        }
        return currentPath;
    }
}
