import * as React from "react";
import * as Helmet from "react-helmet";

interface IOpenGraphProps {
    title: string;
    description: string;
    imageUrl: string;
}

/*
    React Component for the Open Graph Protocol.
    Reference:
    http://ogp.me/

    Usage example:
    <OpenGraphMeta title={ "Cloud Insurance" } description={ "Reasons to buy cloud insurance." } imageUrl={ "https://example.com/cloud.jpg" }/>
*/
export class OpenGraphMeta extends React.Component<IOpenGraphProps, {}> {
    constructor(props) {
        super(props);
    }

    public render() {
        return (
            <Helmet
                meta={[
                    { "property": "og:title", "content": this.props.title },
                    { "property": "og:description", "content": this.props.description },
                    { "property": "og:url", "content": location.href },
                    { "property": "og:image", "content": this.props.imageUrl },
                ]}
            />
        );
    }
}
