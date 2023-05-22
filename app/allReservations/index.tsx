import { StyleSheet, View } from "react-native";
import { useRouter } from "expo-router";

import Header from "../../src/components/general/header";

import { Container, FormButton, FormButtonText } from "../../src/components/general/styles";
import ReservationsList from "../../src/components/reservation/reservationsList";

export default function AllReservations() {
    const router = useRouter();

    const handleGoBackClick = () => {
        router.push({
            pathname: "/reservation",
        });
    }

    const handleFinishClick = () => {
        router.push({
            pathname: "/reservation",
        });
    }

    return (
        <View style={styles.view}>
            <Header page='menu' title="Minhas reservas" />

            <ReservationsList />

            <Container style={styles.buttonContainer}>
                <FormButton style={styles.button} onPress={handleGoBackClick}>
                    <FormButtonText>Voltar</FormButtonText>
                </FormButton>
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
        flexBasis: "48.8%",
    },
});