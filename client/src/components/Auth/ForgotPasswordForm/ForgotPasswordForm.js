import React from 'react';
import {Form, Field, ErrorMessage} from 'formik';

import * as S from './StyledForgotPasswordForm';

const ForgotPasswordForm = ({err, handleOnInput}) => {
   return (  
      <S.Wrapper>
         <Form>
            <S.FieldWrapper>
               <Field 
                  name='email' 
                  type='text' 
                  placeholder='Email' 
                  onInput={handleOnInput}
               />
               <ErrorMessage 
                  name='email' 
                  component='p' 
               />
               <S.Error>
                  {err}
               </S.Error>
            </S.FieldWrapper>
            <S.Button type='submit'>Send password reset email</S.Button>
         </Form>
      </S.Wrapper>
   );
}
 
export default ForgotPasswordForm;