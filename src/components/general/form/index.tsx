import React from "react";

import { Text } from "react-native";
import { Link } from "expo-router";

import { Container } from "../styles";

interface FormNavigationProps {
    formPage?: String
}

const FormNavigation = ({ formPage = 'register' }: FormNavigationProps) => {
    if (formPage === 'login') {
        return (
            <Container>
                <Text>Ainda não possui conta?</Text>
                <Link href='/'>Cadastrar</Link>
            </Container>
        )
    } else {
        return (
            <Container>
                <Text>Já possui conta?</Text>
                <Link href='/login'>Entrar</Link>
            </Container>
        )
    }
}

export default FormNavigation;