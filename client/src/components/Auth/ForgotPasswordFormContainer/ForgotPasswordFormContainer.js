import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import ForgotPasswordForm from '../ForgotPasswordForm/ForgotPasswordForm';

const ForgotPasswordFormContainer = () => {
   
   const handleOnSubmit = values => {
      axios.post('', values)
   }

   return (  
      <Formik
         component={ForgotPasswordForm}
         initialValues={{
            email: '',
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
 
export default ForgotPasswordFormContainer;