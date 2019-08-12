import React from 'react';
import * as S from './StyledAuthEmailVerified';
import logout from '../../../assets/img/logout.svg';
import axios from 'axios';

const AuthEmailVerified = ({email, id}) => {
   
   const handleOnClick = () => {
      axios.post(`/api/${id}/confirmEmail`, {id})
   }

   return (  
      <S.Wrapper>
         <S.Nav>
            <S.Logout>
               <S.Img src={logout} /> 
               Sign out
            </S.Logout>
         </S.Nav>
         <S.Main>
            <S.Box>
               <S.Content>
                  Please confirm your email at 
                  <S.Span>
                    {email}
                  </S.Span> 
                  to confinue. If you don't see your message 
                  <S.Span>
                     check your spam folder.
                  </S.Span>
                  <S.Button onClick={handleOnClick}>
                     Resend email vertification
                  </S.Button>
                  <S.Information>
                     Refresh this page if you already activated your account
                  </S.Information>
               </S.Content>          
            </S.Box>
         </S.Main>
      </S.Wrapper>
   );
}
 
export default AuthEmailVerified;