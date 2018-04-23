import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { YesButton } from '../shared/YesButton'

export class StationZero extends React.Component<any> {
    constructor() {
        super();

    }

    public render() {
        return (
            <div>
                <div className="row">
                    <p className="paragraph center-text">Hi there!<br />
                        Welcome to the Biodiesel Studio.<br />
                        Here you will learn about the steps we take to make state of the art biodiesel!<br />
                        Are you ready to jump in?<br />
                    </p>
                </div>
                <div className="row center-content">
                    <YesButton finishAtStation={this.props.finishAtStation} />
                </div>
            </div>
        );
    }

}
