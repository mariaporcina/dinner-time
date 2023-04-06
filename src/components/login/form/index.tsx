import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';

import { Container, FormContainer, Input, FormButton, FormButtonText } from '../../general/styles';

interface LoginFormProps {
    handlePress: Function;
}

const LoginForm = ({ handlePress }: LoginFormProps) => {
    const [email, onEmailUpdate] = React.useState('');
    const [password, onPasswordUpdate] = React.useState('');
    
    return (
        <FormContainer
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={0} >
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
            <FormButton onPress={ handlePress } >
                <FormButtonText>Entrar</FormButtonText>
            </FormButton>
        </FormContainer>
    );
}

export default LoginForm;
