import React from 'react';
import { Platform } from 'react-native';

import { FormContainer, Input, FormButton, FormButtonText } from '../../general/styles';

interface RegisterFormProps {
    handlePress: Function;
}

const RegisterForm = ({ handlePress }: RegisterFormProps) => {
    const [name, onNameUpdate] = React.useState('');
    const [email, onEmailUpdate] = React.useState('');
    const [password, onPasswordUpdate] = React.useState('');
    
    return (
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
            <FormButton onPress={ handlePress }>
                <FormButtonText>Cadastrar</FormButtonText>
            </FormButton>
        </FormContainer>
    );
}

export default RegisterForm;
