import * as React from "react";
import { Link } from "react-router";

interface INavComponentState {
    isDesktop: boolean;
}

// Need to implement redux to handle global state for media query state. class currently fails SRP.
export class NavComponent extends React.Component<{}, INavComponentState> {
    private isDesktop: boolean;
    constructor(props) {
        super(props);
        const mql = window.matchMedia("(min-width: 64em)"); // TODO: Move to responsive.settings
        mql.addListener(this.handleDesktopChange.bind(this));
        this.handleDesktopChange(mql, true);
    }

    public handleDesktopChange(mediaQueryList: MediaQueryList, isConstructor: boolean = false) {
        if (mediaQueryList.matches) {
            this.isDesktop = true;
        } else {
            this.isDesktop = false;
        }

        this.updateState(isConstructor);
    }

    public render(): JSX.Element {
        return (
            <nav>
                <ul>
                    <li><Link to="/home">{this.state.isDesktop ? "Home" : (<i className="material-icons">home</i>)}</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
        );
    }

    private updateState(isConstructor: boolean = false) {
        if (isConstructor) {
            this.state = {
                "isDesktop": this.isDesktop,
            };
        } else {
            this.setState({
                "isDesktop": this.isDesktop,
            });
        }
    }
}
