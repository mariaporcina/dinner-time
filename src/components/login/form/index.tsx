import React, { useEffect, useState } from 'react';
import { Alert, Platform, Text } from 'react-native';

import { FormContainer, Input, FormButton, FormButtonText } from '../../general/styles';
import useAuth from '../../../../hooks/useAuth';

const LoginForm = () => {
    const [email, onEmailUpdate] = useState('');
    const [password, onPasswordUpdate] = useState('');

    const { login, loading, error } = useAuth();

    const handleLinkClick = async () => {
        try {
            await login(email, password);
        } catch (error: any) {
            Alert.alert("Erro de Login", "Email e/ou senha incorretos. Tente Novamente.");
        }
    }

    if(loading) {
        return <Text>Redirecting...</Text>
    } 
    
    return (
        <FormContainer
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={0} >
            {error && <Text>Email e/ou senha incorretos. Tente novamente.</Text>}
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
            <FormButton onPress={ handleLinkClick } >
                <FormButtonText>Entrar</FormButtonText>
            </FormButton>
        </FormContainer>
    );
}

export default LoginForm;
