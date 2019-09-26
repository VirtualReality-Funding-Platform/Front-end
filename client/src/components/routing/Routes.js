import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../../auth/Register';
import Login from '../../auth/Login';
import Alert from '../layout/Alert';
import Dashboard from '../dashboards/Dashboard';
import CreateProfile from '../profile-forms/CreateProfile';

import AddProject from '../profile-forms/AddProject';

import Profiles from '../profiles/Profiles';
import Profile from '../profile/Profile';

import Ent from '../../components/Users/Ent'
import NotFound from '../layout/NotFound';
import PrivateRoute from '../routing/PrivateRoute';
import InvestorDashboard from '../dashboards/InvestorDashboard'
import Projects from '../projects/Projects'
const Routes = () => {
  return (
    <section className='container'>
      <Alert />
      <Switch>
        <Route path='/create-profile' component={CreateProfile}/>
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
         <Route exact path='/profiles' component={Ent} />
        <Route exact path='/profile/:id' component={Profile} /> 
         <Route exact path='/dashboard' component={Dashboard} /> 
         <Route path = "/ent" component={Ent}/>
        <Route path="/investors" component={InvestorDashboard}/>
        <Route path="/projects" component={Projects}/>
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;