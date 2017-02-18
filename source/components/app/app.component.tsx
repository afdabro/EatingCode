import * as React from "react";

import { NavComponent } from "../nav/nav.component";

export class AppComponent extends React.Component<{}, {}> {
  constructor(props) {
    super(props);
  }

  public render() {
    return (
      <main role="main">
        <header>
          <h1>Eating Code For Breakfast</h1>
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
