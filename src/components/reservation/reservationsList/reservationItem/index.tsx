import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import Checkbox from 'expo-checkbox';

import { MenuItemType, ReservationType } from "../../../../types/types";

import { useReservationContext } from "../../../../contexts/ReservationContext";
import { ItemContainer, ItemImage, ContentContainer, ItemName, ItemDescription, ItemPrice } from "../../../general/listStyles";

const trash = require('../../../../../assets/images/trash.png');

interface MenuItemProps {
    reservation: ReservationType;
}

const ReservationItem = ({ reservation }: MenuItemProps) => {
    const { selectedItems, setSelectedItems } = useReservationContext();
    // const [isChecked, setChecked] = useState(false);

    const handlePress = () => {
        console.log('clicou');
    }

    return (
        <ItemContainer>
            <ContentContainer>
                <ItemName>{reservation.date}</ItemName>
                <TouchableOpacity onPress={handlePress}>
                    <Image source={trash} />
                </TouchableOpacity>
            </ContentContainer>
        </ItemContainer>
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

export default ReservationItem;