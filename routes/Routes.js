import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RegisterForm from '../Register/RegisterForm';
import LoginForm from "../Login/LoginForm";
import Alert from './../layout/Alert';
import Dashboard from '../dashboards/Dashboard';

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