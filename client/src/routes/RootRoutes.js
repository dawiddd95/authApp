import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import AuthRoutes from './AuthRoutes';
import Bookings from '../components/Home/Bookings/Bookings';
import ErrorPage from '../components/ErrorPage/ErrorPage';

const RootRoutes = () => {
   return (  
      <Router>
         <Switch>
            <Route exact path='/' render={() => <Redirect to='/auth/login' />} />
            <Route path='/auth' component={AuthRoutes} /> 
            {/* Calosc do refaktoryzacji to: Bookings, SignupUserFormContainer, LoginUserFormContainer, ten Route poniżej => sciezka jest okej ale zamiast Bookings niech wyświetla VerifyUser, VerifyUser zrefaktorowac */}
            <Route path='/:id/bookings' component={Bookings} />
            <Route component={ErrorPage} />
         </Switch>
      </Router>
   );
}
 
export default RootRoutes;