import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// Za kazdym razem jak chce wejsc w chroniony komponent niech tutaj pobiera mi z bazy danych (pole isLogged ?? albo sesje z bazy danych) TO RACZEJ NIE POMOZE
// JWT => zeby bylo sprawdzane co kazde zadanie ale jak

const PrivateRoute = ({component: Component}) => {
   return <Route render={(props) => (
      true ? <Component {...props} /> : <Redirect to='/auth/login' />
   )} />
}

export default PrivateRoute;

