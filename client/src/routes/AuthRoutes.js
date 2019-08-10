import React from 'react';
import {Switch, Route} from 'react-router-dom';

import AuthLogin from '../components/Auth/AuthLogin/AuthLogin';
import AuthSignup from '../components/Auth/AuthSignup/AuthSignup';
import AuthConfirmEmail from '../components/Auth/AuthConfirmEmail/AuthConfirmEmail';
import AuthForgotPassword from '../components/Auth/AuthForgotPassword/AuthForgotPassword';
import ErrorPage from '../components/ErrorPage/ErrorPage';

const AuthRoutes = () => {
   // http://localhost:3000/auth/verify?id=5d4eb4740dacbb1804b19790&apiKey=eaa49606-8663-4a53-9121-b176a18ce596
   //  https://analytics.twitter.com/user/tylermcginnis/tweets?filter=top & origin=im
   return (  
      <Switch>
         <Route exact path='/auth/login' component={AuthLogin} />   
         <Route exact path='/auth/signup' component={AuthSignup} /> 
         <Route exact path='/auth/verify' component={AuthConfirmEmail} />
         <Route exact path='/auth/forgot-password' component={AuthForgotPassword} />
         <Route component={ErrorPage} />
      </Switch>
   );
}
 
export default AuthRoutes;