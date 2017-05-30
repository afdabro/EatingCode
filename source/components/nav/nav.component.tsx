import * as React from "react";
import * as Helmet from "react-helmet";
import { Link } from "react-router";
import "reflect-metadata";
import { lazyInject } from "../../inversify.config";
import { NAV_TYPES } from "./nav.types";
import { INavTitleProvider } from "./navtitle.provider";

require("./nav.scss");
import { IResponsiveModel } from "../../models/responsive.model";

export class NavComponent extends React.Component<IResponsiveModel, {}> {
    @lazyInject(NAV_TYPES.NavTitleProvider) private navTitleProvider: INavTitleProvider;

    public render(): JSX.Element {
        const currentPath = this.navTitleProvider.getNavTitle();
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
}
