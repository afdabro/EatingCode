import * as React from "react";
import { BlogProvider } from "./blog.provider";
import { BlogPost } from "./blogpost";

interface IBlogComponentProps {
    params: {
        id: string;
    };
}

export class BlogComponent extends React.Component<IBlogComponentProps, {}> {
    // TODO: Convert to use Redux container
    private blogProvider = new BlogProvider();
    constructor(props) {
        super(props);
    }

    public render() {
        const blogPost = this.blogProvider.getBlogPost(this.props.params.id);
        return (<BlogPost id={blogPost.id} title={blogPost.title} markdown={blogPost.markdownContent} />);
    }
}
