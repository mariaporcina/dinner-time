import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import { Plate } from "../../../general/models";

const plateImage = require('../../../../../assets/images/prato1.jpg');

interface MenuItemProps {
    plate: Plate
}

const MenuItem = ({ plate }: MenuItemProps) => {
    return (
        <View style={styles.view}>
            <View>
                <Image style={styles.image} source={plateImage} />
            </View>
            <View>
                <Text style={styles.text}>{ plate.name }</Text>
                <Text>{ plate.shortDescription }</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        flexDirection: "row",
        gap: 10,
        marginBottom: 10,
        backgroundColor: '#fff',
        borderRadius: 2,
        padding: 10
    },
    text: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5,
        marginTop: 10
    },
    image: {
        width: 140,
        height: 100,
        borderRadius: 4
    }
});

export default MenuItem;