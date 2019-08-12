import styled from 'styled-components';

export const Wrapper = styled.div`
   width: 100%;
   height: 100%;
   background-color: #F0F2F5;
   overflow-y: hidden;

   display: flex;
   flex-direction: column;
   align-items: center;
`

export const Nav = styled.nav`
   width: 100%;
   height: 60px;
   background-color: white;
   font-family: segoe;

   display: flex;
   justify-content: flex-end;
   align-items: center;
`

export const Logout = styled.div`
   padding-right: 30px;

   display: flex;
   align-items: center;
`

export const Img = styled.img`
   width: 20px;
   height: 20px;
   margin-right: 10px;
`

export const Main = styled.main`
   width: 100%;
   height: 90vh;
`

export const Box = styled.div`
   width: 600px;
   height: 300px;
   margin: 60px auto 0 auto;
   background-color: white;
   border-radius: 5px;

   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`

export const Content = styled.div`
   width: 80%;
   margin: 100% auto 100% auto;
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
   margin-top: 60px;
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

export const Information = styled.p`
   margin-top: 30px;
`