import React from 'react';
import {Link} from 'react-router-dom';
import * as S from './StyledAuthForgotPassword';

import ForgotPasswordFormContainer from '../ForgotPasswordFormContainer/ForgotPasswordFormContainer';

const AuthForgotPassword = () => {
   return (  
      <S.Wrapper>
         <S.Content>
            <S.Header>
               Company Managment App
            </S.Header>
            <ForgotPasswordFormContainer />
            <S.LinkWrapper>
               <Link to='/auth/login'>
                  Cancel
               </Link>
            </S.LinkWrapper>
         </S.Content>
      </S.Wrapper>
   );
}
 
export default AuthForgotPassword;