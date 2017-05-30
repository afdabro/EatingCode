/*
Inversify enables normal IoC in typescript

Source:
https://github.com/inversify/InversifyJS
https://github.com/inversify/inversify-inject-decorators


*/
import { Container } from "inversify";
import getDecorators from "inversify-inject-decorators";
import "reflect-metadata";
import { BlogProvider, IBlogProvider } from "./components/blog/blog.provider";
import { BLOG_TYPES } from "./components/blog/blog.types";
import { NAV_TYPES } from "./components/nav/nav.types";
import { INavTitleProvider, NavTitleProvider } from "./components/nav/navtitle.provider";

const appContainer = new Container();
appContainer.bind<IBlogProvider>(BLOG_TYPES.BlogProvider).to(BlogProvider);
appContainer.bind<INavTitleProvider>(NAV_TYPES.NavTitleProvider).to(NavTitleProvider);

const {
    lazyInject,
    lazyInjectNamed,
    lazyInjectTagged,
    lazyMultiInject,
} = getDecorators(appContainer);

export {
    appContainer,
    lazyInject,
    lazyInjectNamed,
    lazyInjectTagged,
    lazyMultiInject
};
