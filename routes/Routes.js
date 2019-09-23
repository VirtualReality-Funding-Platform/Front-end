import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RegisterForm from '../vr-fund-front/src/components/Register/RegisterForm';
import LoginForm from "../vr-fund-front/src/components/Login/LoginForm";
import Alert from '../vr-fund-front/src/components/layout/Alert';
import Dashboard from '../vr-fund-front/src/components/dashboards/Dashboard';

const Routes = () => {
    return (
      <section className='container'>
        <Alert />
        <Switch>
          <Route exact path='/register' component={RegisterForm} />
          <Route exact path='/login' component={LoginForm} />
          <Route path='/dashboard' component={Dashboard} />
         </Switch>
         </section>
          )
          }
          export default Routes