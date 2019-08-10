import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import LoginUserForm from '../LoginUserForm/LoginUserForm';

const LoginUserFormContainer = () => {
   
   const handleOnSubmit = values => {
      axios.post('/api/auth/login', values)
      .then(res => console.log(res.data))
   }

   return (  
      <Formik
         component={LoginUserForm}
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
   );
}
 
export default LoginUserFormContainer;