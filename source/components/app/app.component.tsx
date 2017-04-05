import * as React from "react";
import * as Helmet from "react-helmet";
import "react-redux";

require("./app.scss");
import { NavContainer } from "../../containers/nav.container";
import { ResponsiveContainer } from "../../containers/responsive.container";
import { SkipToLink } from "../links/skiptolink.component";
const appTitle = "Eating Code";
const appTitleTemplate = `%s | ${appTitle}`;

export class AppComponent extends React.Component<{}, {}> {
  constructor(props) {
    super(props);
  }

  public render() {
    return (
      <main role="main">
        <Helmet
          title="Home"
          titleTemplate={appTitleTemplate}
          defaultTitle={appTitle}
          meta={[{ "name": "author", "content": "Andrew Dabrowski" }]}
        />
        <ResponsiveContainer dateModified={new Date()} isDesktop={false} saveResponsive={() => {
          // tslint:disable-next-line:no-console
          console.log("Hello HAL");
        }} />
        <header className="app-banner">
          <h1 className="app-font-headline">Eating Code For Breakfast</h1>
          <NavContainer dateModified={new Date()} isDesktop={false} />
          <SkipToLink LinkId="BottomLink" LinkDescription="Skip to Bottom"/>
          <div id="TopLink"/>
        </header>
        <article>
          {this.props.children}
        </article>
        <footer>
          <SkipToLink LinkId="TopLink" LinkDescription="Skip to Top"/>
          <div id="BottomLink"/>
          <small>&copy; 2017 Andrew Dabrowski</small>
        </footer>
      </main>
    );
  }
}
