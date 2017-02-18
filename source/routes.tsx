import * as React from "react";
import {hashHistory, IndexRoute, Route, Router} from "react-router";
import {aboutComponent} from "./components/about/about.component";
import {AppComponent} from "./components/app/app.component";
import {homeComponent} from "./components/home/home.component";

export const router = (
    <Router history={hashHistory}>
        <Route path="/" component={AppComponent}>
        <IndexRoute component={homeComponent}/>
        <Route path="/home" component={homeComponent}/>
        <Route path="/about" component={aboutComponent}/>
        </Route>
    </Router>
);
