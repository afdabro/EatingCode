import * as React from "react";
import * as Helmet from "react-helmet";

import { OpenGraphMeta } from "./opengraph.meta.component";
import { TwitterSummaryCardMeta } from "./twitter.summarycard.component";

interface ISocialMetaProps {
    // article title
    title: string;
    // article description
    description: string;
    // image url for thumbnail
    imageUrl: string;
    // twitter handle for site
    twitterHandle: string;
}

export class SocialMeta extends React.Component<ISocialMetaProps, {}> {
    constructor(props) {
        super(props);
    }

    public render() {
        return (<div>
            <Helmet meta={[{ "name": "description", "content": this.props.description }]} />
            <OpenGraphMeta title={this.props.title} description={this.props.description} imageUrl={this.props.imageUrl} />
            <TwitterSummaryCardMeta title={this.props.title} description={this.props.description} imageUrl={this.props.imageUrl} twitterHandle={this.props.twitterHandle} />
        </div>);
    }
}
