import React from "react";
import { StyleSheet, TouchableOpacity, Image, Alert } from "react-native";
import { useRouter } from "expo-router";

import { ReservationType } from "../../../../types/types";

import { Container } from "../../../general/styles";
import { ItemContainer, ContentContainer, ItemName } from "../../../general/listStyles";

import { useAllReservationsContext } from "../../../../contexts/ReservationsContext";

const trash = require('../../../../../assets/images/trash.png');
const pencil = require('../../../../../assets/images/pencil.png');

interface MenuItemProps {
    reservation: ReservationType;
}

const ReservationItem = ({ reservation }: MenuItemProps) => {
    const router = useRouter();
    const { remove, refreshData } = useAllReservationsContext();

    const handleEdit = async () => {
        if (reservation.id) {
            router.push(`/allReservations/${reservation.id}`);
        } else {
            Alert.alert("View error", "cannot access book details because it does not have an id!");
        }
    }

    const handleDelete = async () => {
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
        <ItemContainer style={styles.itemContainer}>
            <ContentContainer style={styles.contentContainer}>
                <ItemName style={styles.itemName}>{new Date(reservation.date).toLocaleString()}</ItemName>

                <Container style={styles.buttonContainer}>
                    <TouchableOpacity onPress={handleEdit}>
                        <Image source={pencil} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleDelete}>
                        <Image source={trash} />
                    </TouchableOpacity>
                </Container>
            </ContentContainer>
        </ItemContainer>
    );
}

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    buttonContainer: {
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        gap: 10,
        paddingTop: 0,
        paddingBottom: 0,
        paddingRight: 0,
        paddingLeft: 0,
    },
    itemName: {
        marginTop: 0,
        marginBottom: 0,
    },
    itemContainer: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingRight: 15,
        paddingLeft: 15,
    }
});

export default ReservationItem;