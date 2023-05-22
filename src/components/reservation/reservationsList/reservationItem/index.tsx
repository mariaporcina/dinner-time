import React from "react";
import { StyleSheet, TouchableOpacity, Image, Alert } from "react-native";

import { ReservationType } from "../../../../types/types";

import { useReservationContext } from "../../../../contexts/ReservationContext";
import { ItemContainer, ContentContainer, ItemName } from "../../../general/listStyles";
import { useAllReservationsContext } from "../../../../contexts/ReservationsContext";

const trash = require('../../../../../assets/images/trash.png');

interface MenuItemProps {
    reservation: ReservationType;
}

const ReservationItem = ({ reservation }: MenuItemProps) => {
    const { selectedItems, setSelectedItems } = useReservationContext();
    const { remove, refreshData } = useAllReservationsContext();

    const handlePress = async () => {
        if (reservation.id) {
            Alert.alert("Cancelar reserva", "Tem certeza que deseja cancelar essa reserva?", [
                {
                    text: "Yes",
                    onPress: async () => {
                        await remove(reservation.id!);
                        await refreshData();
                    },
                },
                {
                    text: "No",
                    style: "cancel",
                },
            ]);
        } else {
            Alert.alert(
                "delete error",
                "cannot delete reservation"
            );
        }
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