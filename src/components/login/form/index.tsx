import React, { useEffect, useState } from 'react';
import { Alert, Platform, StyleSheet, Text } from 'react-native';

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
            {error && <Text style={styles.errorMessage}>Email e/ou senha incorretos. Tente novamente.</Text>}
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

const styles = StyleSheet.create({
    errorMessage: {
        color: '#d90429',
        marginBottom: 10,
        backgroundColor: 'rgba(217, 4, 41, 0.2)',
        paddingTop: 5,
        paddingBottom: 5,
        paddingRight: 10,
        paddingLeft: 10,
    },
});

export default LoginForm;