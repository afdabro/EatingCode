import * as React from "react";
import { BlogProvider } from "./blog.provider";

export class BlogsComponent extends React.Component<{}, {}> {
    // TODO: Convert to use Redux container
    private blogProvider = new BlogProvider();
    constructor(props) {
        super(props);
    }

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
