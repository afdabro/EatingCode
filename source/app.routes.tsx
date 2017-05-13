import * as React from "react";
import { IndexRoute, Route } from "react-router";
import { AboutComponent } from "./components/about/about.component";
import { AppComponent } from "./components/app/app.component";
import { BlogComponent } from "./components/blog/blog.component";
import { homeComponent } from "./components/home/home.component";

export const appRoutes = (
            <Route path="/" component={AppComponent}>
                <IndexRoute component={homeComponent} />
                <Route path="/home" component={homeComponent} />
                <Route path="/about" component={AboutComponent} />
                <Route path="/blogs/:id" component={BlogComponent} />
            </Route>);
