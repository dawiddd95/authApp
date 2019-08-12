import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import ForgotPasswordForm from '../ForgotPasswordForm/ForgotPasswordForm';

const ForgotPasswordFormContainer = () => {
   const [err, setErr] = React.useState('');
   
   const handleOnSubmit = values => {
      axios.post('/api/auth/forgot-password', values)
      .then(res => {
         if(res.data.success) setErr('');
         else setErr(res.data.err)
      })
   }

   const handleOnInput= () => {
      setErr('');
   }

   return (  
      <Formik
      render={props => <ForgotPasswordForm {...props} err={err} handleOnInput={handleOnInput} />}
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