import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { NextButton } from './shared/NextButton'

interface StationState {
    station: string[];
    stationNumber: number;
}

export class BiodieselStudio extends React.Component<RouteComponentProps<{}>> {
    /*constructor(props) {
        super(props);

        this.state = {
            station = ["StationZero", "StationOne", "StationTwo",
                        "StationThree", "StationFour", "StationFive",
                        "StationSix", "StationSeven"],
            stationNumber = 0
        };
    }*/

    public render() {
        return (
            <div>
                <h1>BIODIESEL STUDIO</h1>
                <NextButton />
            </div>
        );
    }

}
