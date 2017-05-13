import { blogPosts } from "./blogs";

export class BlogProvider {
    public getBlogPost(id: string) {
        return blogPosts.find((blog) => blog.id === id);
    }

    public getBlogPosts() {
        return blogPosts.map((element) => {
            return { "id": element.id, "title": element.title };
        });
    }
}
