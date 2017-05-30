import { Container } from "inversify";
import getDecorators from "inversify-inject-decorators";
import "reflect-metadata";
import { NAV_TYPES } from "./components/nav/nav.types";
import { INavTitleProvider, NavTitleProvider } from "./components/nav/navtitle.provider";

const appContainer = new Container();
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
