import React from 'react';
import {Link} from 'react-router-dom';

import * as S from './StyledAuthEmailVerified';

const AuthEmailVerified = ({email}) => {
   return (  
      <S.Wrapper>
         <S.Content>
            <S.Text>
               Please confirm your email at 
               <S.Span>
                  {email}
               </S.Span> 
               to confinue.
            </S.Text>
            <S.Button>
               Resend email vertification
            </S.Button>
            <S.LinkWrapper>
               <Link to='/auth/login'>
                  Log in with another account
               </Link>
            </S.LinkWrapper>
         </S.Content>
      </S.Wrapper>
   );
}
 
export default AuthEmailVerified;