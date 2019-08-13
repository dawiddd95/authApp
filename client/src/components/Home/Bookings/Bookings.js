import React from 'react';
import axios from 'axios';

import AuthEmailVerified from '../../Auth/AuthEmailVerified/AuthEmailVerified';

const Bookings = (props) => {
   const [active, setActive] = React.useState('');
   const [email, setEmail] = React.useState('');

   React.useEffect(() => {
      axios.get(`/api/${props.location.state.id}/confirmEmail`)
      .then(res => {
         setEmail(res.data.email)
         setActive(res.data.active)
      })
      // Bookings będzie wyświetlać już samo bookings w tym przypadku sam ten tekst w div
      // Sciagniecie do reduxowego storea email bo wszystkie dzialania beda identyfikowane poprzez email lub wmongoSB zrobic referencje do usera
      
      // UPDATE 2019-08-13
      //-----------------------------------------------------------------------------------
      // ZAMIAST DO REDUXA EMAIL TO EMAIL DAC DO JWT CZYLI OBIEKTU JSONA WEB TOKENU
   })

   return (  
      <div>
         {!active ? (
               <AuthEmailVerified 
                  email={email} 
                  id={props.location.state.id}
               />
            ) : (
               <div>
                  Zrobić potem że zamiast tego komponentu ma tutaj być LoginVerify => z ifem !active i albo AuthEmailVerified albo Bookings komponent.
                  Jest aktywny. Tutaj ciało naszego komponentu
               </div>
            )
         }
      </div>
   );
}
 
export default Bookings;