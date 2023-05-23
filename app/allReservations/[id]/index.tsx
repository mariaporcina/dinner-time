import { useState } from "react";
import { StyleSheet, View, Text, Alert } from "react-native";
import { Redirect, useSearchParams } from "expo-router";

import Header from "../../../src/components/general/header";
import WelcomeSection from "../../../src/components/general/welcomeSection";
import ReservationForm from "../../../src/components/reservation/form";

import useDocument from "../../../hooks/useDocument";
import { useReservationContext } from "../../../src/contexts/ReservationContext";
import { useAllReservationsContext } from "../../../src/contexts/ReservationsContext";

import { ReservationType } from "../../../src/types/types";

export default function ReservationDetails() {
    const { id } = useSearchParams();

    const { data: reservation, loading, upsert } = useDocument<ReservationType>("reservations", id as string);
    const { refreshData } = useAllReservationsContext();
    const { date } = useReservationContext();

    const [updated, setUpdated] = useState(false);

    let editing = undefined;
    if (reservation) {
        editing = new Date(reservation.date).toLocaleString();
    }

    const handleUpsert = async () => {
        setUpdated(false);
        if (reservation) {
            try {
                await upsert({
                    ...reservation,
                    date: date.toString(),
                });
                await refreshData();
                setUpdated(true);

            } catch (error: any) {
                Alert.alert("Update Book error", error.toString());
            }
        }
    }

    if (updated) {
        return <Redirect href="/allReservations" />
    }

    if (loading || !reservation) {
        return <Text>Loading...</Text>
    }

    return (
        <View style={styles.view}>
            <Header page='reservation' />

            <WelcomeSection
                title="Editar reserva."
                subtitle={editing ? `Você está editando a reserva do dia: ${editing}` : 'Você pode editar a data e/ou o horário da sua reserva.'} />

            <ReservationForm handlePress={handleUpsert} currentDate={new Date(reservation.date)} isEditReservation={true} />
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: '#edf2f4',
        paddingBottom: 50,
    },
    link: {
        textAlign: 'center',
        color: 'blue'
    }
});