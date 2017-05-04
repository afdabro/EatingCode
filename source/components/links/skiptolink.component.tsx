import * as $ from "jquery";
import * as React from "react";
require("./skip.scss");

interface ISkipProps {
    Id?: string;
    LinkId: string;
    LinkDescription: string;
}

// reference: https://www.bignerdranch.com/blog/web-accessibility-skip-navigation-links/
export class SkipToLink extends React.Component<ISkipProps, {}> {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    public render(): JSX.Element {
        return (<a id={this.props.Id} href={"#" + this.props.LinkId} onClick={this.handleClick} className="skip"> {this.props.LinkDescription} </a>);
    }

    private handleClick(): void {
        // declare the content we're skipping to
        const skipTo = "#" + this.props.LinkId;
        // Setting 'tabindex' to -1 takes an element out of normal
        // tab flow but allows it to be focused via javascript
        $(skipTo).attr("tabindex", -1).on("blur focusout", () => {

            // when focus leaves this element,
            // remove the tabindex attribute
            $(skipTo).removeAttr("tabindex");

        });
        // focus on the content container
        document.getElementById(this.props.LinkId).focus();
    }
}
