import styled from "styled-components/native";
// import { View } from "react-native";

const Container = styled.View`
    background-color: #fff;
    align-items: center;
    justify-content: center;
    border: 1px solid red;
    width: 100%;
    max-width: 96%;
    padding: 10px
`;

const FormContainer = styled.View`
    align-items: stretch;
    border: 1px solid red;
    width: 100%;
`;

const Input = styled.TextInput`
    padding: 15px 10px;
    border: 1px solid #f6f6f6;
    font-size: 15px;
    margin-bottom: 10px;
`;

const FormButton = styled.Button`
    color: #000;
    border: 1px solid red;
`;

export { 
    Container,
    FormContainer,
    Input,
    FormButton
};