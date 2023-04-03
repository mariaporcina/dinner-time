import React from "react";

import { View, Text, StyleSheet } from "react-native";

const Header = () => {
    return (
        <View style={ styles.view }>
            <Text style={ styles.text }>Dinner Time</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: '#DC2F02',
        paddingTop: 45,
        paddingLeft: 10,
        paddingRight: 10,
        height: 85,
    },
    text: {
        fontSize: 22,
        fontWeight: 'bold',
    }
});

export default Header;