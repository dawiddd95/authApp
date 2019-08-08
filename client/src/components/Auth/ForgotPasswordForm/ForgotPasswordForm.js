import React from 'react';
import {Form, Field, ErrorMessage} from 'formik';

import * as S from './StyledForgotPasswordForm';

const ForgotPasswordForm = () => {
   return (  
      <S.Wrapper>
         <Form>
            <S.FieldWrapper>
               <Field 
                  name='email' 
                  type='text' 
                  placeholder='Email' 
               />
               <ErrorMessage 
                  name='email' 
                  component='p' 
               />
            </S.FieldWrapper>
            <S.Button type='submit'>Send password reset email</S.Button>
         </Form>
      </S.Wrapper>
   );
}
 
export default ForgotPasswordForm;