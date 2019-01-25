
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Profile from '../components/Profile';
import Work from '../components/WorkExperience';
import Education from '../containers/Education';
import Projects from '../components/Projects';
import Home from '../components/HomePage';
import Contact from '../components/Contact';


const AppRoutes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact={true}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/work" component={Work}/>
            <Route path="/education" component={Education}/>
            <Route path="/project" component={Projects}/>
            <Route path="/contact" component={Contact}/>
        </Switch>
    );
};

export default AppRoutes;