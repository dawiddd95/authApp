import React from 'react';
import axios from 'axios';

const AuthConfirmEmail = (props) => {

   React.useEffect(() => {
      console.log(props.location.search)
      // axios.get('api/auth/verify')
      // .then(res => console.log(res.data))
      axios.get('api/verify')
      .then(res => console.log(res.data))
   })

   return (  
      <div>
         {props.location.search}
         Your account is now active !!
      </div>
   );
}
 
export default AuthConfirmEmail;

