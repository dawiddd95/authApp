import React from 'react';
import {Form, Field, ErrorMessage} from 'formik';

import * as S from './StyledSignupUserForm';

const SignupUserForm = ({err, handleOnInput}) => {
   return (  
      <S.Wrapper>
         <Form>
            <S.FieldWrapper>
               <Field 
                  name='name' 
                  type='text' 
                  placeholder='Name' 
               />
               <ErrorMessage 
                  name='name' 
                  component='p' 
               />
            </S.FieldWrapper>
            <S.FieldWrapper>
               <Field 
                  name='surname' 
                  type='text' 
                  placeholder='Surname' 
               />
               <ErrorMessage 
                  name='surname' 
                  component='p' 
               />
            </S.FieldWrapper>
            <S.FieldWrapper>
               <Field 
                  onInput={handleOnInput}
                  name='email' 
                  type='text' 
                  placeholder='Email' 
               />
               <ErrorMessage 
                  name='email' 
                  component='p' 
               />
               <S.Error>
                  {err}
               </S.Error>
            </S.FieldWrapper>
            <S.FieldWrapper>
               <Field 
                  name='password' 
                  type='password' 
                  placeholder='Password' 
               />
               <ErrorMessage 
                  name='password' 
                  component='p' 
               />
            </S.FieldWrapper>
            <S.FieldWrapper>
               <Field 
                  name='confirmPassword' 
                  type='password' 
                  placeholder='Confirm password' 
               />
               <ErrorMessage 
                  name='confirmPassword' 
                  component='p' 
               />
            </S.FieldWrapper>        
            <S.Button type='submit'>Sign up</S.Button>
         </Form>
      </S.Wrapper>
   );
}
 
export default SignupUserForm;