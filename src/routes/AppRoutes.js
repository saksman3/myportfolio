
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Profile from '../components/Profile';
import Projects from '../components/Projects';
import Home from '../components/HomePage';
import Contact from '../components/Contact';



const AppRoutes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact={true}/>
            <Route path="/resume" component={Profile}/>
            <Route path="/project" component={Projects}/>
            <Route path="/contact" component={Contact}/>
        </Switch>
    );
};

export default AppRoutes;