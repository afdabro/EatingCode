import { injectable } from "inversify";
import "reflect-metadata";
import { blogPosts } from "./blogs";

export interface IBlogProvider {
    getBlogPost(id: string): { "id": string, "markdownContent": string, "title": string };
    getBlogPosts(): Array<{ "id": string, "title": string }>;
}

@injectable()
export class BlogProvider implements IBlogProvider {
    public getBlogPost(id: string) {
        return blogPosts.find((blog) => blog.id === id);
    }

    public getBlogPosts() {
        return blogPosts.map((element) => {
            return { "id": element.id, "title": element.title };
        });
    }
}
