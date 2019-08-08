import React from 'react';
import {Link} from 'react-router-dom';
import * as S from './StyledAuthLogin';

import LoginUserFormContainer from '../LoginUserFormContainer/LoginUserFormContainer';
import AuthSocialLogin from '../AuthSocialLogin/AuthSocialLogin';

const AuthLogin = () => {
   return (  
      <S.Wrapper>
         <S.Content>
            <S.Header>
               Company Managment App
            </S.Header>
            <LoginUserFormContainer />
            <AuthSocialLogin />
            <S.LinkWrapper>
               <Link to='/auth/signup'>
                  Create an account
               </Link>
            </S.LinkWrapper>
         </S.Content>
      </S.Wrapper>
   );
}
 
export default AuthLogin;