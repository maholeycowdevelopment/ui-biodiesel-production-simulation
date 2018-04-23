import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div className="home">
            <div className="row">
                <h1 className="page-header">University of Idaho Biodiesel Education Program</h1>
            </div>
            <div className="row home-info-section">
                <div className="col-sm-6">
                    <p className="paragraph">Welcome to the online biodiesel studio presented by the University
                    of Idaho! If you haven't been here before, you might want to check out
                    the Tutorial section. Otherwise, go ahead and jump into the biodiesel
                    studio. </p>
                    <p className="paragraph">Here are some reasons to use biodiesel:</p>
                    <ul>
                        <li>Renewable</li>
                        <li>Higher Cetane Number</li>
                        <li>Cleaner Burning</li>
                        <li>Nontoxic</li>
                        <li>Environmentally Friendly</li>
                        <li>Domestic</li>
                        <li>More food</li>
                        <li>Adds to fuel lubricity</li>
                        <li>Interchangeability</li>
                    </ul>
                    <p className="paragraph">Want the specifics? Go check out: <a href='http://biodieseleducation.org/Use/BiodieselBenefits.html'>Biodiesel Benefits</a></p>
                </div>
                <div className="col-sm-6">
                    <img className="home-image" src={require('./img/Administration_Building.jpg')} alt="Admin Building Picture" />
                </div>
            </div>
            <div className="row home-info-section">
                <div className="col-sm-6">
                    <img className="home-image" src={require('./img/biodiesel_lab.jpg')} alt="Biodiesel Lab Pic" />
                </div>
                <div className="col-sm-6">
                    <p className="paragraph">Check out the links below if you want to learn more about the
                    National Biodiesel Education Program and the degrees offered at the
                    University of Idaho that help innovators enter this exciting field!</p>
                    <ul>
                        <li><a href='http://biodieseleducation.org/index.html'>National Biodiesel Education Program</a></li>
                        <li><a href='http://www.uidaho.edu/academics'>University of Idaho Academics</a></li>
                    </ul>
                </div>
            </div>
        </div>;
    }
}
