import styled from "styled-components";

import "../pure/pure.css"

export const VieW = styled.div`
    background: #008b8b;
    margin-top: ${props => props.margintop || 0};
`;

export const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

export const Form = styled.form`
  width: 400px;
  background: #fff;
  padding: 20px;
  align-items: center;
  p {
    color: white;
    background-color: blue;
    font-size: 16px;
    margin-bottom: 15px;
    border: 1px solid black;
    padding: 10px;
    width: 95%;
    text-align: center;
  }  
`;

export const Input = styled.input`
width: 400px;
marginl-left: 1000px;
`;

export const Button = styled.button`
border-radius: 5px;

`;

export const FormRoW = styled.div`
    padding: 30px;
    margin-left: 20;
    margin-right: 20; 
    background-color: #f5f5f5;
    margin-top: 5;
    margin-bottom: 5;
    border-radius: 5;
`;

export const TextInpuT = styled.input`
    border-color: black;
    border-bottom-width: 1;
    padding-left: 5;
    padding-right: 5;
    padding-bottom: 10;
    font-size: 20;
`;

export const TexT = styled.p``;

export const ButtoN = styled.button`
    color: #696969;
`;

