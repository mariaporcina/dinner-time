import React from "react";

import { StyleSheet, Text } from "react-native";
import { Link } from "expo-router";

import { FormNavigationContainer } from "../styles";

type page = 'register' | 'login';

interface FormNavigationProps {
    formPage?: page;
}

const FormNavigation = ({ formPage = 'register' }: FormNavigationProps) => {
    const defineNavigation = {
        'login': {
            text: 'Ainda não possui conta?',
            linkText: 'Cadastrar',
            url: '/'
        },
        'register': {
            text: 'Já possui conta?',
            linkText: 'Entrar',
            url: '/login'
        }
    };

    return (
        <FormNavigationContainer>
            <Text>{ defineNavigation[formPage].text }</Text>
            <Link href={ defineNavigation[formPage].url }>{ defineNavigation[formPage].linkText }</Link>
        </FormNavigationContainer>
    )
}

export default FormNavigation;