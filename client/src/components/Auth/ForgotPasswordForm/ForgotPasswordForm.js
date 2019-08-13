import React from 'react';
import {Form, Field, ErrorMessage} from 'formik';

import * as S from './StyledForgotPasswordForm';

const ForgotPasswordForm = ({responseText, success, handleOnInput}) => {
   const color = success ? {'color': '#2aa61c'} : {'color': '#f5222d'};
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
               <S.Response style={color}>
                  {responseText}
               </S.Response>
            </S.FieldWrapper>
            <S.Button type='submit'>Send password reset email</S.Button>
         </Form>
      </S.Wrapper>
   );
}
 
export default ForgotPasswordForm;