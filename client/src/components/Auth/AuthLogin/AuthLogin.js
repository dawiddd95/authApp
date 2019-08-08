import React from 'react';
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
         </S.Content>
      </S.Wrapper>
   );
}
 
export default AuthLogin;