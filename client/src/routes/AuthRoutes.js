import React from 'react';
import {Switch, Route} from 'react-router-dom';

import AuthLogin from '../components/Auth/AuthLogin/AuthLogin';
import AuthSignup from '../components/Auth/AuthSignup/AuthSignup';
import ErrorPage from '../components/ErrorPage/ErrorPage';

const AuthRoutes = () => {
   return (  
      <Switch>
         <Route exact path='/auth/login' component={AuthLogin} />   
         <Route exact path='/auth/signup' component={AuthSignup} /> 
            {/* <Route path='/login' component={Login} /> 
            <Route path='/signup' component={SignUp} /> */}
         <Route component={ErrorPage} />
      </Switch>
   );
}
 
export default AuthRoutes;