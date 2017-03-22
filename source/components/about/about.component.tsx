import * as React from "react";
import * as Helmet from "react-helmet";

export const aboutComponent = () => {
    return (<div><Helmet meta={[{ "name": "description", "content": "The origins of Eating Code" }]}/>About</div>);
};
