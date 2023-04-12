import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { Plate } from "../../../general/models";

interface MenuItemProps {
    plate: Plate
}

const MenuItem = ({ plate }: MenuItemProps) => {
    return (
        <View style={styles.view}>
            <Text style={styles.text}>{ plate.name }</Text>
            <Text>{ plate.shortDescription }</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: 'red',
    },
    text: {
        color: 'white'
    }
});

export default MenuItem;