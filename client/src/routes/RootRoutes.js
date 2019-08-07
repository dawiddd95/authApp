import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import AuthRoutes from './AuthRoutes';
import ErrorPage from '../components/ErrorPage/ErrorPage';

const RootRoutes = () => {
   return (  
      <Router>
         <Switch>
            <Route exact path='/' render={() => <Redirect to='/auth/login' />} />
            <Route path='/auth' component={AuthRoutes} /> 
            {/* <Route path='/login' component={Login} /> 
            <Route path='/signup' component={SignUp} /> */}
            <Route component={ErrorPage} />
         </Switch>
      </Router>
   );
}
 
export default RootRoutes;