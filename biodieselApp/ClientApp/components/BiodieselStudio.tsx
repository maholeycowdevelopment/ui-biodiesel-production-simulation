import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { NextButton } from './shared/NextButton'
import { StationZero } from './stations/StationZero';
import { StationOne } from './stations/StationOne';

interface BiodieselStudioState {
    station: string[];
    stationNumber: number;
}

export class BiodieselStudio extends React.Component<RouteComponentProps<{}>, BiodieselStudioState> {
    constructor() {
        super();

        this.state = {
            station: ["StationZero", "StationOne", "StationTwo",
                "StationThree", "StationFour", "StationFive",
                "StationSix", "StationSeven", "StationEight"],
            stationNumber: 0
        };
    }



    public render() {
        return (
            <div>
                {this.chooseStation(this.state.stationNumber)}
            </div>
        );
    }

    nextStation() {
        let currentStation = this.state.stationNumber;
        if (currentStation < (this.state.station.length - 1))
            currentStation++;
        this.setState({ stationNumber: currentStation });
    }

    chooseStation(stationNumber: number) {
        switch (stationNumber) {
            case 0: {
                return <StationZero finishAtStation={this.nextStation.bind(this)} />
                //break;
            }
            case 1: {
                return <StationOne />
                //break;
            }
            case 2: {

                //break;
            }
            case 3: {

                //break;
            }
            case 4: {

                //break;
            }
            case 5: {

                //break;
            }
            case 6: {

                //break;
            }
            case 7: {

                //break;
            }
            case 8: {

                //break;
            }
            case 9: {

                //break;
            }
            default: {
                return <StationZero />
            }
        }
    }

}
