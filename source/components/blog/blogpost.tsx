// Sources
// https://github.com/showdownjs/showdown

import * as React from "react";
import * as Helmet from "react-helmet";
import { Markdown } from "react-showdown";

interface IBlogPostProps {
    markdown: string;
    title: string;
    id: string;
}

export class BlogPost extends React.Component<IBlogPostProps, {}> {

    public render() {
        return (<div id={this.props.id}><Helmet title={this.props.title} /><Markdown markup={this.props.markdown} /></div>);
    }
}
