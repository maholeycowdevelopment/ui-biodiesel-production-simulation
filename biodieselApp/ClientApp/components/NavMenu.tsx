import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

export class NavMenu extends React.Component<{}, {}> {
    public render() {
        return <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand site-title" href="#">Biodiesel Studio</a>
            </div>
            <ul className="nav navbar-nav">
                <li>
                    <NavLink to={ '/' } exact activeClassName='active'>
                        <span className='glyphicon glyphicon-home'></span> Home
                    </NavLink>
                 </li>
                 <li>
                    <NavLink to={ '/biodieselstudio' } activeClassName='active'>
                        <span className='glyphicon glyphicon-education'></span> Biodiesel Studio
                    </NavLink>
                </li>
                <li>
                    <NavLink to={ '/tutorial' } activeClassName='active'>
                        <span className='glyphicon glyphicon-th-list'></span> Tutorial
                    </NavLink>
                </li>
            </ul>
            <img className="logo" src={require('./img/light-ui-logo.png')} alt='UI-Logo' />
          </div>
        </nav>
    }
}
