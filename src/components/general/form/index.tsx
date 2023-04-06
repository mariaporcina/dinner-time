import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';

import { Container, FormContainer, Input, FormButton, FormButtonText } from '../styles';

const Form = () => {
    const [name, onNameUpdate] = React.useState('');
    const [email, onEmailUpdate] = React.useState('');
    const [password, onPasswordUpdate] = React.useState('');
    
    return (
        // <Container>
            <FormContainer
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={0} >
                <Input 
                    placeholder='Nome e Sobrenome'
                    value={name}
                    onChangeText={onNameUpdate} />
                <Input
                    placeholder='E-mail'
                    value={email}
                    onChangeText={onEmailUpdate}
                    keyboardType='email-address' />
                <Input
                    placeholder='Senha'
                    value={password}
                    onChangeText={onPasswordUpdate}
                    keyboardType='visible-password'
                    secureTextEntry={true} />
                <FormButton>
                    <FormButtonText>Cadastrar</FormButtonText>
                </FormButton>
            </FormContainer>
        // </Container>
    );
}

export default Form;