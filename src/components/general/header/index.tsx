import { Redirect } from "expo-router";
import React from "react";

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { colors } from "../constants";
import { Container } from '../styles';

import useAuth from "../../../../hooks/useAuth";

interface HeaderProps {
    page: string;
    title?: string;
}

const Header = ({ page, title }: HeaderProps) => {
    const { user, loading, logout } = useAuth();

    const handleClick = async() => {
        try {
            await logout();
        } catch (error: any) {
            console.error('Error', error)
        }
    }

    if(!loading){
        if(page !== 'login' && page !== 'register' && user === null) {
            return <Redirect href="/login" />
        }
    }

    return (
        <View style={ styles.view }>
            <Container style={styles.container}>
                <Text style={ styles.text }>{!!title ? title : 'Dinner Time'}</Text>
                { page !== 'login' && page !== 'register' && (
                    <TouchableOpacity onPress={ handleClick }><Text style={styles.link}>Sair</Text></TouchableOpacity>
                )}
            </Container>
        </View> 
    )
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: colors.darkRed,
        paddingTop: 45,
        height: 90,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#edf2f4'
    },
    link: {
        textAlign: 'center',
        color: 'white',
        textDecorationLine: 'underline'
    }
});

export default Header;