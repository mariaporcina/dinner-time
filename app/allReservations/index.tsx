import { StyleSheet, View } from "react-native";
import { Redirect, useRouter } from "expo-router";

import Header from "../../src/components/general/header";

import { Container, FormButton, FormButtonText } from "../../src/components/general/styles";
import ReservationsList from "../../src/components/reservation/reservationsList";
import useAuth from "../../hooks/useAuth";

export default function AllReservations() {
    const router = useRouter();
    // const { user, loading } = useAuth();

    const handleFinishClick = () => {
        router.push({
            pathname: "/reservation",
        });
    }

    return (
        <View style={styles.view}>
            <Header page='allReservations' title="Minhas reservas" />

            <ReservationsList />

            <Container style={styles.buttonContainer}>
                <FormButton style={styles.button} onPress={handleFinishClick}>
                    <FormButtonText>Nova reserva</FormButtonText>
                </FormButton>
            </Container>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: '#edf2f4',
        paddingBottom: 50
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 10,
        flexGrow: 0,
        flexShrink: 1,
        flexBasis: 'auto'
    },
    button: {
        flexBasis: "100%",
    },
});