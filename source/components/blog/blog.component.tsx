import * as React from "react";
import "reflect-metadata";
import { lazyInject } from "../../inversify.config";
import { IBlogProvider } from "./blog.provider";
import { BLOG_TYPES } from "./blog.types";
import { BlogPost } from "./blogpost";

interface IBlogComponentProps {
    params: {
        id: string;
    };
}

export class BlogComponent extends React.Component<IBlogComponentProps, {}> {
    @lazyInject(BLOG_TYPES.BlogProvider) private blogProvider: IBlogProvider;

    public render() {
        const blogPost = this.blogProvider.getBlogPost(this.props.params.id);
        return (<BlogPost id={blogPost.id} title={blogPost.title} markdown={blogPost.markdownContent} />);
    }
}
