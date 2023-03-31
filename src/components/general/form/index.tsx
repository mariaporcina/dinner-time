import styled from 'styled-components/native';
import { Button, StyleSheet, TouchableOpacity, Text, TouchableHighlight} from 'react-native';

import { Container, FormContainer, Input, FormButton } from '../styles';

const Form = () => {
    return (
        <Container>
            <FormContainer>
                <Input 
                    placeholder='Nome e Sobrenome' />
                <Input
                    placeholder='E-mail' 
                    keyboardType='email-address' />
                <Input
                    placeholder='Senha' 
                    keyboardType='visible-password' />
                <TouchableOpacity style={ myStyles.button }>
                    <Text style={ myStyles.button }>Cadastrar</Text>
                </TouchableOpacity>
            </FormContainer>
        </Container>
    );
}

const myStyles = StyleSheet.create({
    button: {
        backgroundColor: '#000',
        color: '#fff',
    }
});

export default Form;