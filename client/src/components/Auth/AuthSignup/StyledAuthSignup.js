import styled from 'styled-components';
import background from '../../../assets/img/signup.png';

export const Wrapper = styled.div`
   width: 100%;
   min-height: 100vh;
   height: 100%;
   background-image: url(${background});
   background-size: cover;
   background-position: center;


   display: flex;
   justify-content: flex-end;
`

export const Content = styled.div`
   width: 500px;
   min-height: 100vh;
   height: 100%;
   background-color: white;

   display: flex;
   flex-direction: column;
`

export const Header = styled.h1`
   margin-top: 60px;
   font-weight: 600;
   font-size: 24px;
   font-family: segoe;
   color: rgba(0,0,0,0.85);
   text-align: center;
`

export const LinkWrapper = styled.div`
   margin-top: 10px;
   
   display: flex;
   justify-content: center;

   a {
      color: #f5222d;
      font-size: 16px;
      font-family: segoe;
      text-decoration: none;
      transition: .3s;

      :hover {
         color: color: rgba(245,34,45,0.8);
         transition: .3s;
      }
   }
`