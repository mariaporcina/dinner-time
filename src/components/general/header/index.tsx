import React from "react";

import { View, Text, StyleSheet } from "react-native";

import { colors } from "../constants";
import { Container } from '../styles';

const Header = () => {
    return (
        <View style={ styles.view }>
            <Container>
                <Text style={ styles.text }>Dinner Time</Text>
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
    text: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#edf2f4'
    }
});

export default Header;