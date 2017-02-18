import * as React from "react";
import { Link } from "react-router";

// tslint:disable-next-line:variable-name
export const NavComponent = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    );
};
