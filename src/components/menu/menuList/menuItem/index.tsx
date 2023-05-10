import React, { useState } from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Checkbox from 'expo-checkbox';

import { MenuItemType } from "../../../general/models";
import { ItemContainer, ContentContainer, PlateName, PlateDescription, PlatePrice, PlateImage } from "../../style";

const plateImage = require('../../../../../assets/images/prato1.jpg');

interface MenuItemProps {
    plate: MenuItemType;
    isMenu: boolean;
}

const MenuItem = ({ plate, isMenu }: MenuItemProps) => {
    const [isChecked, setChecked] = useState(false);

    const handlePress = () => {
        if(isMenu){
            setChecked(!isChecked);
        }
    }

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <ItemContainer style={isChecked && styles.viewSelected}>
                <View>
                    <PlateImage source={plateImage} />
                </View>
                <ContentContainer>
                    <PlateName>{ plate.name }</PlateName>
                    <PlateDescription>{ plate.shortDescription }</PlateDescription>
                    <PlatePrice>{ `R$ ${plate.price.toFixed(2).toString().replace('.', ',')}` }</PlatePrice>
                    { isMenu && <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#000' : undefined}
                    /> }
                </ContentContainer>
            </ItemContainer>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    viewSelected: {
        backgroundColor: '#c8d3e4',
    },
    checkbox: {
        position: "absolute",
        right: 0,
        top: 0,
    },
});

export default MenuItem;