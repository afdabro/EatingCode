import * as React from "react";
import * as Helmet from "react-helmet";
import "react-redux";

require("./app.scss");

import "../../assets/GitHub-Mark-32px.png";
import "../../assets/In-2C-28px-R.png";
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
        <footer className="app-footer">
          <div id="BottomLink"/>
          <SkipToLink LinkId="TopLink" LinkDescription="Skip to Top"/>
          <div>
            <ul>
              <li>
                <a href="https://github.com/afdabro/EatingCode/tree/development">
                  <img src="/images/GitHub-Mark-32px.png" alt="GitHub repository for Eating Code" height="32" width="32"/>
                  View EatingCode GitHub Repository
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/andrew-dabrowski-43023114/">
                  <img src="/images/In-2C-28px-R.png" alt="View my LinkedIn Profile"/>
                  View my LinkedIn<sup>&reg;</sup> Profile
                </a>
              </li>
            </ul>
          </div>
          <div>
            <small>&copy; 2017, Andrew Dabrowski. All rights reserved.</small>
          </div>
        </footer>
      </main>
    );
  }
}
