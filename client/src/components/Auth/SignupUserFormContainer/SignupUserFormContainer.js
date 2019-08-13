import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

import SignupUserForm from '../SignupUserForm/SignupUserForm';

const LoginUserFormContainer = () => {
   // Podczas udanej rejestracji pobrac do redux jako loggedUser: name, surname, email, id, active. Czyli dispatchowac zamienic pusty obiekt loggedUser: {} na => loggedUser: {name: 's', surname: 'sdd' ...}
   // Wtedy te dane bedziemy mogli sobie swobodnie z reduxa odebrac gdziekolwiek
   // Wtedy redirect byc moze nie bedzie potrzebował tego obiektu state:


   // UPDATE 2019-08-13
   // -------------------------------------------------------------------------
   // DANE O ZALOGOWANYM USERZE WCIAZ MOZEMY DAC DO REDUXA, ALE TE DANE NIECH POBIERA Z BAZY DANYCH PIERWSZY KOMPONENT PO ZALOGOWANIU POPRAWNYM (CZYLI VerifyUser) I TO ON NIECH DISPATCHUJE WSZYSTKO DO REDUXA => NAME, SURNAME, email, ACTIVE   lub wrzucic to do  JWT

   const [redirect, setRedirect] = React.useState('');
   const [email, setEmail] = React.useState('');
   const [id, setId] = React.useState('');
   const [err, setErr] = React.useState('');

   const handleOnSubmit = values => {
      axios.post('/api/auth/signup', values)
      .then(res => {
         if(res.data.success) {
            setEmail(res.data.email);
            setId(res.data.id)
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
               <Redirect to={{
                  pathname: `/${id}/bookings`,
                  state: {email: email, id}
               }} />
            ) : ( 
               <Formik
                  render={props => <SignupUserForm {...props} err={err} handleOnInput={handleOnInput} />}
                  initialValues={{
                     name: '',
                     surname: '',
                     email: '',
                     password: '',
                     confirmPassword: '',
                     active: false
                  }}
                  validationSchema={Yup.object().shape({
                     name: Yup
                        .string()
                        .min(3, 'Minimum 3 characters')
                        .required('Name is required'),
                     surname: Yup
                        .string()
                        .min(3, 'Minimum 3 characters')
                        .required('Surname is required'),
                     email: Yup
                        .string()
                        .email('Email must be a valid email')
                        .required('Email is required'),
                     password: Yup
                        .string()
                        .min(8, 'Minimum 8 characters')
                        .matches(/^(?=.*[A-Z])/, 'Must contain at least one uppercase character')
                        .matches(/^(?=.*[0-9])/, 'Must contain at least one numeric character')
                        .matches(/^(?=.*[!@#\$%\^&])/, 'Must contain at least one special character')
                        .required('Password is required'),
                     confirmPassword: Yup
                        .string()
                        .required('Password must match')
                        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
                  })}
                  onSubmit={values => handleOnSubmit(values)}
               />
            )
         }
      </div> 
   );
}
 
export default LoginUserFormContainer;