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
               to confinue. If you don't see your message 
               <S.Span>
                  check your spam folder.
               </S.Span>
            </S.Text>
            <S.LinkWrapper>
               <Link to='/auth/login'>
                  Back to login page
               </Link>
            </S.LinkWrapper>
         </S.Content>
      </S.Wrapper>
   );
}
 
export default AuthEmailVerified;