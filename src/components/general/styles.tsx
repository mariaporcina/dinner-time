import styled from "styled-components/native";

const Container = styled.View`
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 10px
    flex: 1;
`;

const Title = styled.Text`
    font-size: 24px;
    text-align: center;
`;

const FormContainer = styled.View`
    align-items: stretch;
    width: 100%;
    margin-bottom: 40px
`;

const Input = styled.TextInput`
    padding: 15px 10px;
    border: 1px solid #f6f6f6;
    font-size: 15px;
    margin-bottom: 10px;
    color: #fff;
`;

const FormButton = styled.TouchableOpacity`
    background-color: #DC2F02;
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
    FormButtonText
};