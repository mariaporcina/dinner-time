import { StyleSheet, Text } from 'react-native';

import { FormContainer, Input, FormButton, FormButtonText } from '../styles';

const Form = () => {
    return (
        <FormContainer>
            <Input 
                placeholder='Nome e Sobrenome' />
            <Input
                placeholder='E-mail' 
                keyboardType='email-address' />
            <Input
                placeholder='Senha' 
                keyboardType='visible-password' />
            <FormButton>
                <FormButtonText>Cadastrar</FormButtonText>
            </FormButton>
        </FormContainer>
    );
}

export default Form;