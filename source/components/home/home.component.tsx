import * as React from "react";
import * as Helmet from "react-helmet";
require("./home.scss");

export const homeComponent = () => {
    return (<div>
        <Helmet meta={[{ "name": "description", "content": "Welcome to Eating Code for Breakfast!" }]}/>
        <h1 className="app-title">Coming Soon!</h1>
    </div>);
};
