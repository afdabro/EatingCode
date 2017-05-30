import * as React from "react";
import "reflect-metadata";
import { lazyInject } from "../../inversify.config";
import { IBlogProvider } from "./blog.provider";
import { BLOG_TYPES } from "./blog.types";

export class BlogsComponent extends React.Component<{}, {}> {
    @lazyInject(BLOG_TYPES.BlogProvider) private blogProvider: IBlogProvider;

    public render() {
        const blogPosts = this.blogProvider.getBlogPosts();
        const blogPostsComponents = blogPosts.map((element) => {
            return (<div>
                <a href={`/blogs/${element.id}`}>{element.title}</a>
            </div>);
        });
        const template = (<div>
                                {blogPostsComponents}
                            </div>);
        return (template);
    }
}
