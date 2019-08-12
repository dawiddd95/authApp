import React from 'react';
import {Form, Field, ErrorMessage} from 'formik';
import {Link} from 'react-router-dom';

import * as S from './StyledLoginUserForm';

const LoginUserForm = ({err, handleOnInput}) => {
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
            </S.FieldWrapper>
            <S.FieldWrapper>
               <Field 
                  name='password' 
                  type='password' 
                  placeholder='Password' 
                  onInput={handleOnInput}
               />
               <ErrorMessage 
                  name='password' 
                  component='p' 
               />
               <S.Error>
                  {err}
               </S.Error>
            </S.FieldWrapper>
            <S.CheckboxWrapper>
               <Field 
                  name='remember'
                  type='checkbox'
                  id='remember'
               />
               <S.Label htmlFor='remember'>
                  Remember me
               </S.Label>
               <S.ForgotPassword>
                  <Link to='/auth/forgot-password'>Forgot password</Link>
               </S.ForgotPassword>
            </S.CheckboxWrapper>
            <S.Button type='submit'>Log in</S.Button>
         </Form>
      </S.Wrapper>
   );
}
 
export default LoginUserForm;