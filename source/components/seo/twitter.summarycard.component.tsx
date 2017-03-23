import * as React from "react";
import * as Helmet from "react-helmet";

interface ITwitterCardProps {
    twitterHandle: string;
    title: string;
    description: string;
    imageUrl: string;
}

/*
    React Component for Twitter Summary Card.
    Reference:
    https://dev.twitter.com/cards/types/summary

    Usage example:
    <TwitterSummaryCardMeta twitterHandle={ "@AwesomeClouds"} title={ "Cloud Insurance" } description={ "Reasons to buy cloud insurance." } imageUrl={ "https://example.com/cloud.jpg" }/>
*/
export class TwitterSummaryCardMeta extends React.Component<ITwitterCardProps, {}> {
    constructor(props) {
        super(props);
    }

    public render() {
        return (
            <Helmet
                meta={[
                    { "name": "twitter:card", "content": "summary" },
                    { "name": "twitter:site", "content": this.props.twitterHandle },
                    { "name": "twitter:title", "content": this.props.title },
                    { "name": "twitter:description", "content": this.props.description },
                    { "name": "twitter:image", "content": this.props.imageUrl },
                ]}
            />
        );
    }
}
