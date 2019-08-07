import React from 'react';
import {Form, Field, ErrorMessage} from 'formik';

import * as S from './StyledLoginUserForm';

const LoginUserForm = () => {
   return (  
      <S.Wrapper>
         <Form>
            <S.FieldWrapper>
               <Field name='email' type='text' />
               <ErrorMessage name='email' component='div' />
            </S.FieldWrapper>
            <S.FieldWrapper>
               <Field name='password' type='password' />
               <ErrorMessage name='password' component='div' />
            </S.FieldWrapper>
            <div>
               <button type='submit'>Dodaj</button>
            </div>
         </Form>
      </S.Wrapper>
   );
}
 
export default LoginUserForm;