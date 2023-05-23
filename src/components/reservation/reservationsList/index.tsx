import React from "react";
import { FlatList, StyleSheet, Text } from "react-native";

import ReservationItem from "./reservationItem";
import { Container } from "../../general/styles";

import { useAllReservationsContext } from "../../../contexts/ReservationsContext";

const ReservationsList = () => {
    const { data, loading } = useAllReservationsContext();

    if(loading) {
        return <Text>Loading...</Text>
    }

    return (
        <Container style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item }) => <ReservationItem reservation={item} />}
                keyExtractor={(item) => item.id!}
                ListEmptyComponent={() => <Text>Nenhuma reserva no momento.</Text>} />
        </Container>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "flex-start",
    }
});

export default ReservationsList;
