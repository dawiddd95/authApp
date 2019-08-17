import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import AuthRoutes from './AuthRoutes';
import UserRoutes from './UserRoutes';
import ErrorPage from '../components/ErrorPage/ErrorPage';

const RootRoutes = () => {
   return (  
      <Router>
         <Switch>
            <Route exact path='/' render={() => <Redirect to='/auth/login' />} />
            <Route path='/auth' component={AuthRoutes} /> 
            <Route path='/user' component={UserRoutes} />
            <Route component={ErrorPage} />
         </Switch>
      </Router>
   );
}
 
export default RootRoutes;