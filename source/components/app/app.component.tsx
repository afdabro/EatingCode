import * as React from "react";
import "react-redux";

require("./app.scss");
import { NavContainer } from "../../containers/nav.container";
import { ResponsiveContainer } from "../../containers/responsive.container";

export class AppComponent extends React.Component<{}, {}> {
  constructor(props) {
    super(props);
  }

  public render() {
    return (
      <main role="main">

        <ResponsiveContainer dateModified={new Date()} isDesktop={false} saveResponsive={() => {
        // tslint:disable-next-line:no-console
          console.log("Hello HAL"); }} />
        <header>
          <h1 className="app-font-headline">Eating Code For Breakfast</h1>
          <NavContainer dateModified={new Date()} isDesktop={false} />
        </header>
        <article>
          {this.props.children}
        </article>
        <footer>
        </footer>
      </main>
    );
  }
}
