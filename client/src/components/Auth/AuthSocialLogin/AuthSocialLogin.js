// Nie wiem jak to bedzie wygladac, dopuszczam mozliwosc zmiany calej struktury plikow dotyczacych tej autoryzacji

import React from 'react';
import {Link} from 'react-router-dom';
import * as S from './StyledAuthSocialLogin';
import facebookIcon from '../../../assets/img/facebook.svg';
import googleIcon from '../../../assets/img/google.svg';
import twitterIcon from '../../../assets/img/twitter.svg';

const AuthSocialLogin = () => {
   return (  
      <S.Wrapper>
         <S.Divider>
            <S.Span>
               or
            </S.Span>
         </S.Divider>
         <S.SocialIconsWrapper>
            <S.SocialIcon src={facebookIcon} />
            <S.SocialIcon src={googleIcon} />
            <S.SocialIcon src={twitterIcon} />
         </S.SocialIconsWrapper>
         <S.LinkWrapper>
            <Link to='/auth/signup'>
               Create an account
            </Link>
         </S.LinkWrapper>
      </S.Wrapper>
   );
}
 
export default AuthSocialLogin;