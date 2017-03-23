import * as React from "react";
import * as Helmet from "react-helmet";

export const homeComponent = () => {
    return (<div>
        <Helmet meta={[{ "name": "description", "content": "Welcome to Eating Code for Breakfast!" }]}/>
    </div>);
};
