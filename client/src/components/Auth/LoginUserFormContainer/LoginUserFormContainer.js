import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

import LoginUserForm from '../LoginUserForm/LoginUserForm';

const LoginUserFormContainer = () => {
   // Podczas udanego logowania pobrac do redux jako loggedUser: name, surname, email, id, active. Czyli dispatchowac zamienic pusty obiekt loggedUser: {} na => loggedUser: {name: 's', surname: 'sdd' ...}
   // Wtedy te dane bedziemy mogli sobie swobodnie z reduxa odebrac gdziekolwiek
   // Wtedy redirect byc moze nie bedzie potrzebował tego obiektu state:
   
   const [redirect, setRedirect] = React.useState(false);
   const [email, setEmail] = React.useState('');
   const [id, setId] = React.useState('');
   const [err, setErr] = React.useState('');

   const handleOnSubmit = values => {
      axios.post('/api/auth/login', values)
      .then(res => {
         if(res.data.success) {
            setId(res.data.id)
            setEmail(values.email);
            setRedirect(true);
         } else {
            setErr(res.data.err)
         }
      })
   }

   const handleOnInput= () => {
      setErr('');
   }

   return (  
      <div>
         {redirect ? (
               // Niech robi Redirect na komponent  VerifyUser.js
               <Redirect to={{
                  pathname: `/${id}/bookings`,
                  state: {email: email, id}
               }} />
            ) : ( 
               <Formik
                  component={props => <LoginUserForm {...props} err={err} handleOnInput={handleOnInput} />}
                  initialValues={{
                     email: '',
                     password: ''
                  }}
                  validationSchema={Yup.object().shape({
                     email: Yup
                        .string()
                        .email()
                        .required('Email is required'),
                     password: Yup
                        .string()
                        .required('Password is required'),
                  })}
                  onSubmit={values => handleOnSubmit(values)}      
               />
            )
         }
      </div>
   );
}
 
export default LoginUserFormContainer;