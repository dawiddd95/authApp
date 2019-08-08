import styled from 'styled-components';
import background from '../../../assets/img/emailunverified.jpg';

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

export const Text = styled.div`
   width: 80%;
   margin: 50px auto 30px auto;
   text-align: center;
   font-size: 16px;
   font-family: segoe;

   display: flex;
   justify-content: center;
   flex-wrap: wrap;
`

export const Span = styled.span`
   margin: 0 5px;
   font-family: segoeBold;
`

export const Button = styled.button`
   width: 80%;
   height: 40px;
   margin: 0 auto 25px auto;
   padding: 0 15px;
   font-size: 16px;
   font-family: segoe;
   color: white;
   border: 0;
   border-color: #f5222d;
   border-radius: 4px;
   background-color: #f5222d;
   text-shadow: 0 -1px 0 rgba(0,0,0,0.12);
   box-shadow: 0 2px 0 rgba(0,0,0,0.045);
   outline: 0;
   transition: .3s;
   cursor: pointer;

   &:hover {
      background-color: #ff4d4f;
      border-color: #ff4d4f;
      transition: .3s;
   }
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