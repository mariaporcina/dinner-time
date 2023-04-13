import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Button, TouchableHighlight, TouchableWithoutFeedback } from "react-native";
import Checkbox from 'expo-checkbox';

import { Plate } from "../../../general/models";
import { Title } from "../../../general/styles";

const plateImage = require('../../../../../assets/images/prato1.jpg');

interface MenuItemProps {
    plate: Plate
}

const MenuItem = ({ plate }: MenuItemProps) => {
    const [isChecked, setChecked] = useState(false);

    const handlePress = () => {
        setChecked(!isChecked);
    }

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={isChecked ? styles.viewSelected : styles.view}>
                <View>
                    <Image style={styles.image} source={plateImage} />
                </View>
                <View style={styles.viewInfo}>
                    <Text style={styles.text}>{plate.name}</Text>
                    <Text>{plate.shortDescription}</Text>
                    <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#000' : undefined}
                    />
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    view: {
        flexDirection: "row",
        gap: 10,
        marginBottom: 10,
        backgroundColor: '#fff',
        borderRadius: 2,
        padding: 10,
    },
    viewSelected: {
        flexDirection: "row",
        gap: 10,
        marginBottom: 10,
        backgroundColor: '#8D99AE',
        borderRadius: 2,
        padding: 10,
    },
    viewInfo: {
        flexGrow: 2
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
    },
    checkbox: {
        position: "absolute",
        right: 0,
        top: 0,
    },
});

export default MenuItem;