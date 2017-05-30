import { injectable } from "inversify";
import "reflect-metadata";

export interface INavTitleProvider {
    getNavTitle(): string;
};

@injectable()
export class NavTitleProvider implements INavTitleProvider {
    public getNavTitle() {
        // Note: This only works for simple one level navigations
        const currentPath = window.location.pathname.replace("/", "");
        if (currentPath) {
            return currentPath[0].toUpperCase() + currentPath.slice(1);
        }
        return currentPath;
    }
}
