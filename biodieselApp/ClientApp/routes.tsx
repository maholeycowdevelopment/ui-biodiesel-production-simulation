import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { BiodieselStudio } from './components/BiodieselStudio';
import { Tutorial } from './components/Tutorial';

export const routes = <Layout>
    <Route exact path='/' component={ Home } />
    <Route path='/biodieselstudio' component={ BiodieselStudio } />
    <Route path='/tutorial' component={ Tutorial } />
</Layout>;
