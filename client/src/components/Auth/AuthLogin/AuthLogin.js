
// inputy dwa: Email i Password,  bez labelow sam placeholder
// przerwa miedzy inputami 7mm
// pod inputem Email is required, Password is required
// Sign in as nie ma byc
// pod inputami  w odstepach w jakich maja Sign in as dac Remember me oraz forgot password
// Przycisk Log in
// Bez tesktu pod przyciskiem 
// w odstepie w jakim jest przycisk do tekstu dac ten naglowek or i dac facebook oraz google
// i na koniec create account

import React from 'react';
import * as S from './StyledAuthLogin';

import LoginUserFormContainer from '../LoginUserFormContainer/LoginUserFormContainer';

const AuthLogin = () => {
   return (  
      <S.Wrapper>
         <S.Content>
            <S.Header>
               Company Managment App
            </S.Header>
            <LoginUserFormContainer />
         </S.Content>
      </S.Wrapper>
   );
}
 
export default AuthLogin;