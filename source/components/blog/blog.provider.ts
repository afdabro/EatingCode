import {blogPosts} from "./blogs";

export class BlogProvider {
    public getBlogPost(id: string) {
        return blogPosts.find((blog) => blog.id === id);
    }
}
