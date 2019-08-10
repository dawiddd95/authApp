import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import AuthEmailVerified from '../AuthEmailVerified/AuthEmailVerified';
import SignupUserForm from '../SignupUserForm/SignupUserForm';

const LoginUserFormContainer = () => {
   const [redirect, setRedirect] = React.useState(false);
   const [email, setEmail] = React.useState('');
   const [err, setErr] = React.useState('');
   
   const handleOnSubmit = values => {
      axios.post('/api/auth/signup', values)
      .then(res => {
         //
         console.log(res.data)
         //
         if(res.data.success) {
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
               <AuthEmailVerified email={email} />
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