import React from 'react';
import {Link} from 'react-router-dom';

import * as S from './StyledAuthSignup';
import SignupUserFormContainer from '../SignupUserFormContainer/SignupUserFormContainer';

const AuthSignup = () => {
   return (  
      <S.Wrapper>
         <S.Content>
            <S.Header>
               Company Managment App
            </S.Header>
            <SignupUserFormContainer />
            <S.LinkWrapper>
               <Link to='/auth/login'>
                  Already have an account? Log in.
               </Link>
            </S.LinkWrapper>
         </S.Content>
      </S.Wrapper>
   );
}
 
export default AuthSignup;