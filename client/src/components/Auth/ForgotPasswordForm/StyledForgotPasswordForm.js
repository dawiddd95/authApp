import styled from 'styled-components';

export const Wrapper = styled.div`
   width: 85%;
   height: 100%;
   margin: 45px auto 20px auto;

   form {
      width: 100%;
   }
`

export const FieldWrapper = styled.div`
   width: 100%;
   height: 60px;
   margin-bottom: 8px;
   color: rgba(0,0,0,0.65);

   display: flex;
   flex-direction: column;

   input {
      height: 40px;
      padding: 0 15px;
      border: 0;
      outline: 0;
      border: 1px solid #d9d9d9;   
      border-radius: 5px;
      font-weight: 200;
      font-size: 16px;
      color: rgba(0,0,0,0.65);
      transition: 0.3s;

      &:hover {
         transition: 0.3s;
         border: 1px solid #f5222d;
      }
   
      &:focus {
         border: 1px solid #f5222d;
         box-shadow: 0 0 0 2px rgba(245,34,45,0.2);
      }
   }

   p {
      margin-right: auto;
      margin-left: 5px;
      font-family: 'segoe';
      font-size: 14px;
      color: #f5222d;
   }
`

export const Response = styled.p`
   margin-right: auto;
   margin-left: 5px;
   font-family: 'segoe';
   font-size: 14px;
`

export const Button = styled.button`
   width: 100%;
   height: 40px;
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