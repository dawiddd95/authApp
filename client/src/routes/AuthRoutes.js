import React from 'react';
import {Switch, Route} from 'react-router-dom';

import AuthLogin from '../components/Auth/AuthLogin/AuthLogin';
import AuthSignup from '../components/Auth/AuthSignup/AuthSignup';
import AuthForgotPassword from '../components/Auth/AuthForgotPassword/AuthForgotPassword';
import AuthEmailVerified from '../components/Auth/AuthEmailVerified/AuthEmailVerified';
import ErrorPage from '../components/ErrorPage/ErrorPage';


const AuthRoutes = () => {
   return (  
      <Switch>
         <Route exact path='/auth/login' component={AuthLogin} />   
         <Route exact path='/auth/signup' component={AuthSignup} /> 
         <Route exact path='/auth/forgot-password' component={AuthForgotPassword} />
         {/* Route do obslugi '/auth/email-unverified  */}
         <Route exact path='/auth/:id/email-unverified' component={AuthEmailVerified} />
         <Route component={ErrorPage} />
      </Switch>
   );
}
 
export default AuthRoutes;