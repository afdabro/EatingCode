import * as React from "react";
import * as Helmet from "react-helmet";
import "react-redux";

require("./app.scss");
import { NavContainer } from "../../containers/nav.container";
import { ResponsiveContainer } from "../../containers/responsive.container";

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
        <header>
          <h1 className="app-font-headline">Eating Code For Breakfast</h1>
          <NavContainer dateModified={new Date()} isDesktop={false} />
        </header>
        <article>
          {this.props.children}
        </article>
        <footer>
          <small>&copy; 2017 Andrew Dabrowski</small>
        </footer>
      </main>
    );
  }
}
