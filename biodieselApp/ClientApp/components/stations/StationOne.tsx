import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { YesButton } from '../shared/YesButton'

interface StationOneState {

}

export class StationOne extends React.Component<StationOneState> {
  constructor() {
    super();

  }

  public render() {
    return (
      <div>
        <div className="row">
          <p className="paragraph center-text">Collect Oil Page!</p>
        </div>
      </div>
    );
  }

}
