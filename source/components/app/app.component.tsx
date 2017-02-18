import * as React from "react";

require("./app.scss");

import { NavComponent } from "../nav/nav.component";

export class AppComponent extends React.Component<{}, {}> {
  constructor(props) {
    super(props);
  }

  public render() {
    return (
      <main role="main">
        <header>
          <h1 className="app-font-headline">Eating Code For Breakfast</h1>
        </header>
        <article>
          {this.props.children}
        </article>
        <footer>
          <NavComponent />
        </footer>
      </main>
    );
  }
}
