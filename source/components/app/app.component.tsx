import * as React from "react";

export class AppComponent extends React.Component<{}, {}> {
  constructor(props) {
    super(props);
  }

  public render() {
    return (
      <div>
        <h1>App router sample</h1>
        <br/>
        {this.props.children}
      </div>
    );
  }
}
