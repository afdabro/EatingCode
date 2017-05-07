import * as React from "react";
import { BlogPost } from "./blogpost";
const markdownContent = require("./articles/test.md");

export class BlogComponent extends React.Component<{}, {}> {
    constructor(props) {
        super(props);
    }

    public render() {
        return (<BlogPost title="Hello Markdown" markdown={markdownContent} />);
    }
}
