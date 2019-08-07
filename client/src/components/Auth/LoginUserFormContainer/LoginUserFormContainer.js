import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import LoginUserForm from '../LoginUserForm/LoginUserForm';

const LoginUserFormContainer = () => {
   
   const handleOnSubmit = values => {
      axios.post('', values)
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
         })}
         onSubmit={values => handleOnSubmit(values)}
      />
   );
}
 
export default LoginUserFormContainer;