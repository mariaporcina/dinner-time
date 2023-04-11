import { Link } from "expo-router";
import React from "react";

import { View, Text, StyleSheet } from "react-native";

import { colors } from "../constants";
import { Container } from '../styles';

const Header = ({ page }) => {
    return (
        <View style={ styles.view }>
            <Container style={styles.container}>
                <Text style={ styles.text }>Dinner Time</Text>
                { page !== 'login' && page !== 'register' && <Link style={styles.link} href="/login">Sair</Link> }
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