import * as React from 'react';

export class YesButton extends React.Component<any> {

  public render() {
    return (
      <button className="button yes-button" onClick={this.props.finishAtStation}>Yes</button>
    );
  }
}
