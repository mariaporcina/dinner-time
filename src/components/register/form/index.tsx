import React, { useEffect, useState } from 'react';
import { Platform, Text } from 'react-native';

import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

import { FormContainer, Input, FormButton, FormButtonText } from '../../general/styles';

export default function RegisterForm() {
    const [email, onEmailUpdate] = useState('');
    const [password, onPasswordUpdate] = useState('');
    const [loading, setLoading] = useState(true);

    const handleLinkClick = async () => {
        try {
            setLoading(true);
            await createUserWithEmailAndPassword(getAuth(), email, password);
        } catch (error: any) {
            console.error('Error', error)
        }
    }

    useEffect(() => {
        onAuthStateChanged(getAuth(), () => {
            setLoading(false);
        });
    }, []);

    if(loading){
        return <Text>Redirecting...</Text>
    }

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
            <FormButton onPress={ handleLinkClick }>
                <FormButtonText>Cadastrar</FormButtonText>
            </FormButton>
        </FormContainer>
    );
}