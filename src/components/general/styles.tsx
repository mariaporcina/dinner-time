import styled from "styled-components/native";

import { colors } from "./constants";

const Container = styled.View`
    width: 100%;
    padding: 10px
    flex: 1;
`;

const Title = styled.Text`
    font-size: 24px;
    text-align: center;
    color: #000;
    margin-top: 30px;
    margin-bottom: 10px;
`;

const Subtitle = styled.Text`
    font-size: 16px;
    text-align: center;
    color: #000;
`;

const FormContainer = styled.KeyboardAvoidingView`
    flex: 1;
    height: auto;
    justify-content: flex-end;
    margin-bottom: 50px;
    padding: 10px;
`;

const Input = styled.TextInput`
    padding: 15px 10px;
    border: 1px solid #fff;
    font-size: 15px;
    margin-bottom: 10px;
    background-color: #fff;
`;

const FormButton = styled.TouchableOpacity`
    background-color: ${colors.darkRed};
    text-align: center;
    padding: 15px;
`;

const FormButtonText = styled.Text`
    color: #fff;
    text-align: center;
`;

export { 
    Container,
    FormContainer,
    Input,
    FormButton,
    Title,
    Subtitle,
    FormButtonText
};